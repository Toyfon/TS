import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./Redux/State";




export let rerenderEntireTree = (state:RootStateType) => {
  ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state}/>
        </React.StrictMode>,
      </BrowserRouter>,
      document.getElementById('root')
  );
}










