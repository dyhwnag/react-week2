import React from "react";
import Detail from "../components/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList />} />
                <Route path='/Detail/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;