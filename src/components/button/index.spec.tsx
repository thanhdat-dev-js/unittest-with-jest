import { fireEvent, render } from "@test";
import renderer from "react-test-renderer";
import { Button } from "./index";

describe("Button component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Button onClick={() => undefined} />);

    expect(component).toBeTruthy();
  });
  it("button is clickable", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Button onClick={mockFn} />);

    const btn = getByTestId("btn");
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

describe("Snapshot render", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<a href="http://www.facebook.com">Facebook</a>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
