import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import App from "./App";

describe("Snapshot Testing", () => {
  afterEach(cleanup);
  test("snapshot is accurate", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Counter", () => {
  test("initial value is 0", () => {
    const wrapper = render(<App />);
    const count = wrapper.getByTestId("counter").textContent;
    expect(count).toEqual("1");
  });
});
