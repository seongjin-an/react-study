import {Provider} from "react-redux";
import {createStore} from "../modules";
import {render, screen, waitFor, fireEvent} from "@testing-library/react";
import {AnyAction, Store} from "@reduxjs/toolkit";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {LoginPage} from "../pages/login";
import "@testing-library/jest-dom/extend-expect";


describe('Auth Component', () => {
    let store: Store
    beforeEach(() => {
        store = createStore()
    });
    it('initialize', async () => {
        const { getByText, getAllByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            </Provider>
        )
        const header = screen.getByText(/REACTERS/i)
        expect(header).toBeInTheDocument()//import @testing-library/jest-dom/extend-expect 필요함
        expect(getByText(/REACTERS/i))
        expect(getAllByText(/로그인/i))
        await waitFor(()=>{
            const inputs = document.querySelectorAll('input')
            expect(inputs.length).toBe(2)
        })
    })
    it('should add inputs', async () => {
        const { getByText, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            </Provider>
        )
        const inputs = container.querySelectorAll('input')
        expect(inputs.length).toBe(2)
        await fireEvent.input(inputs[0], 'imsi')
        await fireEvent.input(inputs[1], '1234')
        const button = container.querySelector('button')
        await fireEvent.click(getByText('회원가입'))
    })

})