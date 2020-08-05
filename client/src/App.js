import React, {Fragment, useState} from "react";
import "./App.css";

//Components

import InputTodo from "./components/inputTodo";
import ListTodos from "./components/ListTodos";

function App(){

    return(
    <Fragment>
        <div className="container">
        <InputTodo />
        <ListTodos />
        </div>
    </Fragment>

    );
}
 
export default App; 