const { render , screen, fireEvent} = require("@testing-library/react")
const { default: Header } = require("../Header")
const { Provider } = require("react-redux")
const { default: appStore } = require("../../utils/appStore")
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should Load my heading COMP with login button", ()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name:"login"});
    expect(loginBtn).toBeInTheDocument();
})

it("Should Load my heading COMP with Cart items 0", ()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
})

it("Should Load my heading COMP with Cart items ", ()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})


it("Should change the login btn to logout on-click", ()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name:"login"});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", {name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
})