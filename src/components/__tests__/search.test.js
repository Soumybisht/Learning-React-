import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../Utils/store.js";
import { RES_DATA } from "../../Utils/data.js";
import Body from "../Body.js";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {return Promise.resolve(RES_DATA);
        }
    })
});

test("testing search functionality",()=>{

    const body = render(
        <MemoryRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </MemoryRouter>
    );

    const searchBtn = body.getByTestId("search-btn");
    expect(searchBtn.innerHTML).toBe("Search");
    console.log(searchBtn);

    //const search = body.getByTestId("search");



});