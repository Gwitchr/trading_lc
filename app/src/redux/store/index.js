import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer  from '../reducers';
import rootSaga from '../../sagas';

const INITIAL_STATE =  {

};

export const store=(initialState = INITIAL_STATE)=> {

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

            /**
             *  rootReducer - receive all the reducers
             *  initialState of the store
             *  enhancers
             */
    const store = createStore(
        rootReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );


    sagaMiddleware.run(rootSaga);
    return store;
}
