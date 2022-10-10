import React from "react";
import Products from "../components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList />} />
                <Route path='/products/:id' element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;