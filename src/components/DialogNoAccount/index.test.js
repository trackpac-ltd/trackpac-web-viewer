import { render, screen } from "@testing-library/react";
import DialogNoAccountFound from ".";

//test block
test("Shows Dialog For No Account", () => {
  // render the component on virtual dom
  render(<DialogNoAccountFound open={true} />);
  // check if the title is rendered
  expect(screen.getByText("Oops! No Account Found")).toBeInTheDocument();
  // check if the message is rendered
});
