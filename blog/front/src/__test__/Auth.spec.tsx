import {Provider} from "react-redux";
import {createStore} from "../modules";
import {render, screen, waitFor, fireEvent, cleanup} from "@testing-library/react";
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
    test('initialize', async () => {
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
        const button = getByText((content:string, element:Element|null)=>{
            return (content.startsWith('로그인') && element?.tagName.toLowerCase()==='button')
        })
        await fireEvent.click(button)
        // const failure = getByText('로그인 실패')
        await waitFor(() => {
            // const failure = screen.getByTestId('ansj')
            const failure = screen.getByText('로그인 실패')
            expect(failure).toBeInTheDocument()
        })
        // const failure = getByText((content:string, element:Element|null)=>{
        //     return (content.startsWith('로그인 실패') && element?.tagName.toLowerCase()==='div')
        // })
        // expect(failure).not.toBeNull()

        await waitFor(()=>{ 
            const inputs = document.querySelectorAll('input')
            expect(inputs.length).toBe(2)
        })
    })
    // it('should add inputs', async () => {
    //     const {getByText, container} = render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <LoginPage />
    //             </BrowserRouter>
    //         </Provider>
    //     )
    //     const button = screen.getByText((content: string, element: Element | null) => {
    //         return (element?.tagName.toLowerCase() === 'button' && content.startsWith('로그인'))
    //     })
    //     // const button = screen.getByText(/로그인/i)
    //     await fireEvent.click(button)
    //     // const failure = getByText(/로그인 실패/i)
    //     const failure = screen.getByText((content:string, element: Element|null) => {
    //         return (element?.tagName.toLowerCase()==='div' && content.startsWith('로그인 실패'))
    //     })
    //     expect(failure)
    //
    //     // const inputs = screen.getAllByText((_, element: Element | null) => {
    //     //     return (element?.tagName.toLowerCase() === 'input')
    //     // })
    //     // expect(inputs.length).toBe(2)
    //     // await fireEvent.input(inputs[0], 'imsi')
    //     // await fireEvent.input(inputs[1], '1234')
    //     // const inputs = container.querySelectorAll('input')
    //     // expect(inputs.length).toBe(2)
    //     // await fireEvent.input(inputs[0], 'imsi')
    //     // await fireEvent.input(inputs[1], '12344')
    //     // // 비밀번호가 일치하지 않습니다.
    //     // const button = container.querySelector('button')
    //     // await fireEvent.click(getByText('회원가입'))
    // })

})