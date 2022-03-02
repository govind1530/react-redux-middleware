import React from 'react'
import {Provider} from 'react-redux'
import Age from './Age'
import store from './Store'
export default function App() {
  return (
      <Provider store={store}>
    <Age/>
    </Provider>
  )
}
