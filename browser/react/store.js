import { createStore } from 'redux'
import reducer from './reducers/root-reducer'

// export default createStore(reducer);
let store = createStore(reducer);

export default store;
