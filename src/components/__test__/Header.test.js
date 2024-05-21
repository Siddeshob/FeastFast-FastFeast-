import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../utils/appStore.js";

describe("testing header components", () => {
  it("renders header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: /Login/ }); // Ensure the role and name are correct
    expect(loginButton).toBeInTheDocument();
  });

  it("onclick button change login to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: /Login/ });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: /Logout/ });
    expect(logoutButton).toBeInTheDocument();
  });
});
