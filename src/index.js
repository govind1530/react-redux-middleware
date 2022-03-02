import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ContextApp from './Context/App'
import ReduxThunk from './Redux(Thunk)/App'
import ReduxSaga from './Redux(saga)/App';
ReactDOM.render(<ReduxSaga/>,document.getElementById("root"))