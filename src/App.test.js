import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);

  // eslint-disable-next-line testing-library/no-container
  expect(container.getElementsByClassName("mapContainer").length).toBe(1);
});
