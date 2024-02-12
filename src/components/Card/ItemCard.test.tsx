import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ItemCard from "./ItemCard";
import "@testing-library/jest-dom";

describe("ItemCard Component", () => {
  test("renders ItemCard component with correct props", () => {
    const imageUrl = "image-url";
    const linkTo = "/some-link";
    const title = "Some Title";

    render(
      <Router>
        <ItemCard imageUrl={imageUrl} linkTo={linkTo} title={title} />
      </Router>,
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imageUrl);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", linkTo);
  });

  test("renders image with lazy loading attribute", () => {
    const imageUrl = "image-url";
    const title = "Some Title";
    const linkTo = "/some-link";

    render(
      <Router>
        <ItemCard imageUrl={imageUrl} linkTo={linkTo} title={title} />
      </Router>,
    );

    const imageElement = screen.getByAltText(title);
    expect(imageElement).toHaveAttribute("loading", "lazy");
  });
});
