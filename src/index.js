import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import {store} from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState());
root.render(

    <Provider store={store}>
        <App />
    </Provider>

);


