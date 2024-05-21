const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../utils/Contact");
import "@testing-library/jest-dom";

describe("contact page test cases", () => {
    
  test("should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button in contact component", () => {
    render(<Contact />);
    const heading = screen.getByPlaceholderText("name");

    expect(heading).toBeInTheDocument();
  });

  test("find i/p textBox in contact component", () => {
    render(<Contact />);
    const textbox = screen.getAllByRole("textbox");

    expect(textbox.length).toBe(2);
  });
});
