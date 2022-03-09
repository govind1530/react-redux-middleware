import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ContextApp from './Context/App'
import ReduxThunk from './Redux(Thunk)/App'
import ReduxSaga from './Redux(saga)/App';
import Todo from './Todo';
import Firebase from './Firebase/Pages/App';
import FirebaseRealTimeDataBase from './firebaseRealTimeDataBase/App'
ReactDOM.render(<FirebaseRealTimeDataBase/>,document.getElementById("root"))