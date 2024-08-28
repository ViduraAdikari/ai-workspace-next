import React from "react";
import {render, screen} from "@/util/testUtils/test-utils";
import H1 from "../H1";
import H2 from "../H2";
import Heading from "../Heading";

it ("h1 renders with label", () => {
  render(<H1 text="Heading 1" />);

  expect(screen.getByRole("heading")).toHaveTextContent("Heading 1");
})

it ("h2 renders with label", () => {
  render(<H2 text="Heading 2" />);

  expect(screen.getByRole("heading")).toHaveTextContent("Heading 2");
})

it ("Heading facade renders heading", () => {
  render(<Heading type="h1" text="page title"/>);

  const heading = screen.getByRole("heading");

  expect(heading).toHaveTextContent("title");
})
