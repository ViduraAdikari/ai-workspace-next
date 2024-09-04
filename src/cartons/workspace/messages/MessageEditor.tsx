import React, {FormEvent, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import useFocus from "@/store/features/workspace/inputHooks";

type MessageEditorDictionary = {
  placeholder: string
  submitButton: string
}

type MessageEditorProps = {
  messageText: string | null
  toggleFocus: boolean
  dictionary: MessageEditorDictionary
  onMessageChange: (text: string) => void
  onSubmitClick: () => void
}

const MessageEditor: React.FC<MessageEditorProps> = (props: MessageEditorProps) => {

  const {messageText, toggleFocus, dictionary, onMessageChange, onSubmitClick} = props;

  const [inputRef, setInputRefFocus] = useFocus();

  useEffect(() => {
    setInputRefFocus();
  }, [toggleFocus]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMessageChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmitClick();
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.select();
  }

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}
         sx={{
           width: "100%",
           px: 1,
           py: 2,
           height: "100%",
           borderRadius: "5px",
           border: "2px solid",
           borderColor: theme => theme.palette.primary.dark,
           textAlign: "right",
         }}>

      {/*add multiline rows={3} TextField to make the text filed a textarea, which will require some work to submit
      the form on keyboard enter button press.*/}
      <TextField
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          mb: 2,
        }}
        fullWidth
        ref={inputRef}
        focused
        autoFocus
        onFocus={handleInputFocus}
        size="small"
        id="input-message"
        name="new-message"
        placeholder={dictionary.placeholder}
        value={messageText ? messageText : ""}
        onChange={handleMessageChange}
      />

      <Button variant="contained" color="primary" type="submit" size="small"
              sx={{mt: 5, mr: 1, width: "auto"}}
              disabled={messageText === null || messageText.trim() === ""}>
        {dictionary.submitButton} <SendIcon fontSize="small" sx={{ml: 1}}/>
      </Button>

    </Box>
  )
};

export default MessageEditor;
