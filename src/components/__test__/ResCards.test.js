import { render, screen } from "@testing-library/react";
import ResCards from "../ResCards";
import MOCK_DATA from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";

describe("testing resturent cards with props", () => {
  it("card name checking", () => {
    render(<ResCards resData={MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
  });

  it('checks *isOpen* label on cards', () => {
    render(<ResCards resData={MOCK_DATA} />);

    const cards = screen.getAllByText('res-card');
    console.log(cards)
    const openCard = cards.find(card => card.getAttribute('data-isopen') === 'true');
    console.log(openCard)
    expect(openCard).toBeInTheDocument();
  });
});
