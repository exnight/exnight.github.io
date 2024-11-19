import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Render Home page", async () => {
  render(<Home />);
  screen.getByText("Save and see your changes instantly.");
});
