import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../Utils/store.js";
import { MemoryRouter } from "react-router-dom";
import { LOGO } from "../../Utils/constants.js";

test("Header elements on render",()=>{
    const header = render(<Provider store={store}>
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        </Provider>);

        // const logo = header.getAllByTestId("logo");

        // expect(logo[0].src).toBe(LOGO);

       // const onlineStatus = header.getByTestId("online-status");

       // expect(onlineStatus.innerHTML).toBe("Online Status: 🟢");

       const cart = header.getByTestId("cart");
       expect(cart.innerHTML).toBe("Cart 0 items");
});