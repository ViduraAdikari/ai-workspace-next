import React from "react";
import {fireEvent, render, screen} from "@/util/testUtils/test-utils";
import UIButton from "../UIButton";

it ("UIButton renders with label", () => {
  const onClick = jest.fn();

  render(<UIButton variant="primary" onClick={onClick}>Tested</UIButton>);

  expect(screen.getByRole("button")).toHaveTextContent("Tested");

  fireEvent.click(screen.getByRole("button"));

  expect(onClick).toHaveBeenCalledTimes(1);
});

it ("territory button renders without background", () => {
  const onClick = jest.fn();

  render(<UIButton variant="territory" onClick={onClick}>Territory Button</UIButton>);
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("Territory");

  fireEvent.click(screen.getByRole("button"));

  expect(onClick).toHaveBeenCalledTimes(1);
});

it("large secondary button renders", () => {
  const onClick = jest.fn();

  render(<UIButton variant="primary" size="large" onClick={onClick}>Large Button</UIButton>);

  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("Large Button");

  fireEvent.click(button);
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(2)
});

it ("disabled buttons received no clicks", () => {
  const onClick = jest.fn();

  render(<UIButton variant={"primary"} disabled={true} onClick={onClick}>Disabled Button</UIButton>);

  const button = screen.getByRole("button");

  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(0);
});
