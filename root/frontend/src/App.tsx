import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BasicThreadView from "./pages/BasicThreadView";
import StyledThreadView from "./pages/StyledThreadView";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/thread/1" element={<BasicThreadView />} />
                        <Route path="/thread/1/styled" element={<StyledThreadView />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
