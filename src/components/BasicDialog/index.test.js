import { render, screen } from "@testing-library/react";
import BasicDialog from ".";
//test block
test("Basic Dialog", () => {
  // render the component on virtual dom
  render(
    <BasicDialog
      open={true}
      title="Test Title"
      message="Test Message"
      actions={[{ text: "Test Action", onClick: () => {} }]}
    />
  );
  // check if the title is rendered
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  // check if the message is rendered
  expect(screen.getByText("Test Message")).toBeInTheDocument();
  // check if the action is rendered
  expect(screen.getByText("Test Action")).toBeInTheDocument();
  //check the action button fires
  expect(screen.getByText("Test Action").onclick).toBeTruthy();
});
