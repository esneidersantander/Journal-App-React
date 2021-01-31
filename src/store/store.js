import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//se utiliza esta constante para combinar los reducers ya que la funcion de createStore 
//solo permite enviar un reducer
//combineReducers y createStore son funciones de redux que se instala con npm

//para usar el store se importa el provider en el punto mas alto de la aplicacion
//y se envia como paremetro el store que es el que va a contener la informacion 

//el rpovider se importa de react-redux que tambien se instala con npm
const reducers =combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );

