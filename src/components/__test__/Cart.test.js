import { render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../utils/RestaurantMenu";
import MOCK_DATA_RESMENU from "../mocks/MOCK_DATA_RESMENU.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import "@testing-library/jest-dom"

// Set up the global fetch mock
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_RESMENU),
    })
  );
});

// Reset fetch mock after each test
afterEach(() => {
  jest.resetAllMocks();
});

it("test cart", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const text = screen.getByText("American Nuts");
  expect(text).toBeInTheDocument();
});
