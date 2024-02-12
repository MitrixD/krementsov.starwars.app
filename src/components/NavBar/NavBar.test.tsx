import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./NavBar.tsx";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  test("renders Navbar with correct title", () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const titleElement = screen.getByText("STAR WARS", { exact: false });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders Navbar with menu", () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const menuElement = screen.getByTestId("nav-menu");
    expect(menuElement).toBeInTheDocument();
  });

  test("renders Navbar with link to home page", () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const linkElement = screen.getByRole("link", { name: /STAR WARS/i });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
