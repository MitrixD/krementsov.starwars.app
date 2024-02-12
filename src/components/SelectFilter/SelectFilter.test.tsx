import { render, fireEvent, screen } from "@testing-library/react";
import SelectFilter from "./SelectFilter";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  const options = [
    { name: "Option 1", id: "1" },
    { name: "Option 2", id: "2" },
    { name: "Option 3", id: "3" },
  ];

  test("renders select filter with label and options", () => {
    const onSelectValue = jest.fn();
    render(
      <SelectFilter
        options={options}
        label="Test Label"
        onSelectValue={onSelectValue}
        id="test-select"
      />,
    );

    const dropdownButton = screen.getByLabelText("Open");
    fireEvent.click(dropdownButton);

    const labelElements = screen.getAllByText("Test Label");
    expect(labelElements[0]).toBeInTheDocument();

    options.forEach((option) => {
      const optionElement = screen.getByText(option.name);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test("calls onSelectValue when an option is selected", () => {
    const onSelectValue = jest.fn();
    render(
      <SelectFilter
        options={options}
        label="Test Label"
        onSelectValue={onSelectValue}
        id="test-select"
      />,
    );

    const dropdownButton = screen.getByLabelText("Open");
    fireEvent.click(dropdownButton);

    const optionToSelect = options[1];
    const optionElement = screen.getByText(optionToSelect.name);
    fireEvent.click(optionElement);

    expect(onSelectValue).toHaveBeenCalledWith(optionToSelect.name);
  });
});
