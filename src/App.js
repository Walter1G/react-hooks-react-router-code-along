import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LogIn from "./LogIn";
import Message from "./Message";
import SignUp from "./SignUp";
import NavBar from "./NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/message" element={<Message />} />
                <Route path="/signup" element={<SignUp />} />

            </Routes>
        </div>
    );
}

export default App;