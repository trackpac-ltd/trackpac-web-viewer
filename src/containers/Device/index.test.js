import { render, screen } from "@testing-library/react";
import Homepage from ".";

//test block
test("Testing Homepage", () => {
  render(<Homepage />);
  expect(screen.getByTestId("mapContainer")).toBeInTheDocument();
});
