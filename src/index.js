import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ContextApp from './Context/App'
import ReduxThunk from './Redux(Thunk)/App'
import ReduxSaga from './Redux(saga)/App';
import Todo from './Todo';
import Firebase from './Firebase/Pages/App';
ReactDOM.render(<Firebase/>,document.getElementById("root"))