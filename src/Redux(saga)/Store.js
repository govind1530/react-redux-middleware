import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducer';
import {watchAddAge} from './Sagas'

const sagaMiddleWare = createSagaMiddleware();

const middleware =  applyMiddleware(sagaMiddleWare);

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const componseEnhancer = compose(middleware,reduxTools)



const store = createStore(Reducer,componseEnhancer);
sagaMiddleWare.run(watchAddAge);
export default store;