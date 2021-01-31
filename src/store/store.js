import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';


//se utiliza esta constante para combinar los reducers ya que la funcion de createStore 
//solo permite enviar un reducer
//combineReducers y createStore son funciones de redux que se instala con npm

//para usar el store se importa el provider en el punto mas alto de la aplicacion
//y se envia como paremetro el store que es el que va a contener la informacion 

//el rpovider se importa de react-redux que tambien se instala con npm
const reducers =combineReducers({
    auth: authReducer
})

export const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

        );

