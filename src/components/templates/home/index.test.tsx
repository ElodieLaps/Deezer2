import { render } from "@testing-library/react";
import HomeTemplate from "./";

describe("template Home", () => {
  test("Home should have a title", () => {
    const { getByText } = render(<HomeTemplate title={"home title"} />);
    expect(getByText("home title")).toBeDefined();
  });
});
