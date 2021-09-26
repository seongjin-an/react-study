import React from "react";
import {cleanup, render, waitFor} from '@testing-library/react'
import MyApp from "../components/basic/JestTestApp";

describe('/////JestTestApp/////', () => {

  afterEach(cleanup)

  function expectListItems(count){
    return waitFor(()=>{
      const lis = document.querySelectorAll('li')
      expect(lis.length).toBe(count)
    })
  }
  test('should render', () => {
    const {getByText} = render(<MyApp age={28}/>)
    // expect(getByText('hello halo'))
    const titleElement = getByText(/hello/i);
    expect(titleElement).not.toBeNull()
    expect(getByText(/28/i)).not.toBeNull()
  })

  test('should match snapshot', () => {
    const {container} = render(<MyApp age={28}/>)
    expect(container).toMatchSnapshot()
  })

  test('show ul children counts', async () => {
    const {getByText} = render(<MyApp age={28}/>)
    await expectListItems(2)
  })
})