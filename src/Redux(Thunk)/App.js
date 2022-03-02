import React from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import First from './First';
const App = () =>{
    return (
        <Provider store={store}>
      <First/>
        </Provider>
    )
}

export default App;