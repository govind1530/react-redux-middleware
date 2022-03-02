import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import CountReducer from './CountReducer';
import Reducer from './Reducer';
import thunk from 'redux-thunk';
const CombineReducers = combineReducers({
   userInfo:Reducer,
    count:CountReducer
})

const middleware =  applyMiddleware(thunk);

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const componseEnhancer = compose(middleware,reduxTools)

const store = createStore(CombineReducers,componseEnhancer);

export default store;