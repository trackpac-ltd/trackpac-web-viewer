import { render, screen } from "@testing-library/react";
import LogoOverlay from ".";

test("Logo Overlay", () => {
  // render the component on virtual dom
  render(
    <LogoOverlay
      src="./trackpac.svg"
      alt="Powered By Trackpac"
      link="https://trackpac.io"
    />
  );
  // check if the title is rendered
  expect(screen.getByAltText("Powered By Trackpac")).toBeInTheDocument();
});
