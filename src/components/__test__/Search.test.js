import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RES_DATA from "../mocks/MocResListData.json";
import { act } from "react";

// Mocking global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RES_DATA),
  })
);

describe("Body component", () => {
  it("should render body component and find the search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // Wait for the component to update with fetched data
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    // Get the search button by its role and text
    const searchBtn = screen.getByRole("button", { name: /search/ });
    console.log(searchBtn);
    expect(searchBtn).toBeInTheDocument();
  });

  it("top rated resturunts testing", async () => {
    await act(async () => {
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        );
      });

    const TopBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(TopBtn);
    const filterCard = screen.getAllByTestId("resCard");
    expect(filterCard.length).toBe(9);

    // fireEvent.click(resBtn);
    // const filterresID=screen.getAllByTestId("resCardId")
    //expect(resBtn).toBeInTheDocument()
  });
});
