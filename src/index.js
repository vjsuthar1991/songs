import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import App from './components/App';

createRoot(document.querySelector('#root')).render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>
);