import React from "react";
import { render, waitForElement, cleanup } from "@testing-library/react";
import Toggle from "../Toggle";

afterEach(cleanup);

test(`Test`, () => {
  expect(true).toBe(true);
});

//TODO: Test Hooks
// test(`Toggle Theme Works`, async () => {
//   const { getAllByText } = render(<Toggle />);
// });
