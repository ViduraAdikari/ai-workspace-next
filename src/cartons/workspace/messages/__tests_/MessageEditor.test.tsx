import React, {useState} from "react";
import {fireEvent, render, screen} from "@/util/testUtils/test-utils";
import {Provider} from "react-redux";
import MessageEditor from "../MessageEditor";
import {AIWorkspaceMockProvider} from "@/cartons/workspace/messages/__tests_/testHelper";
import {makeStore} from "@/store/store";
import Mock = jest.Mock;

type EditorSetupProps = {
  onClick: Mock
}

const EditorSetup: React.FC<EditorSetupProps> = ({onClick}: EditorSetupProps) => {
  const [messageText, setTextMessage] = useState<string | null>(null);

  const handleMessageChange = (text: string | null) => {
    setTextMessage(text);
  }

  return <MessageEditor messageText={messageText} toggleFocus={false} onSubmitClick={onClick}
                        dictionary={{submitButton: "Submit", placeholder: "Enter message here."}}
                        onMessageChange={handleMessageChange}/>;
}

const {store} = makeStore();

it("MessageEditor renders with disabled submit button", async () => {
  const onClick = jest.fn();

  render(
    <Provider store={store}>
      <AIWorkspaceMockProvider>
        <EditorSetup onClick={onClick}/>
      </AIWorkspaceMockProvider>
    </Provider>
  );

  const nextButton = screen.getByRole("button");
  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(0);

  let input = screen.getByRole("textbox");
  expect(input).toHaveValue("");

  fireEvent.change(input, {target: {value: "Hello"}});
  expect(input).toHaveValue("Hello");

  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(1);
});
