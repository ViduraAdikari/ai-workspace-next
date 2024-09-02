import React from "react";
import {render, screen} from "@/util/testUtils/test-utils";
import DateLabel from "../DateLabel";
import {getFormattedDate} from "@/util/util";

it ("DateLabel render with time in label", () => {
  const now = new Date();
  const formattedDate: string = getFormattedDate(now, "hh:mm A");

  render (<DateLabel date={now}/>);

  const dateTag = screen.getByRole("label");

  expect(dateTag).toHaveTextContent(formattedDate);
})
