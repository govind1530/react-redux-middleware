import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ContextApp from './Context/App'
import ReduxThunk from './Redux(Thunk)/App'
import ReduxSaga from './Redux(saga)/App';
import Todo from './Todo'
ReactDOM.render(<Todo/>,document.getElementById("root"))