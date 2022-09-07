import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import MainLayout from "./Modules/Layout/MainLayout";
import Home from "./Pages/Home";
import NewPost from "./Pages/NewPost";
import Register from "./Pages/Register";
import Redirect from "./Pages/Redirect";
import Genre from "./Pages/Genre";
import Post from "./Pages/Post";

import { DarkTheme, LightTheme, GlobalStyles } from "./Styles/Variables";

function App() {
  const [theme, setTheme] = useState("dark");

  // Theme toggle from dark/light with styled-components
  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <MainLayout themeToggle={themeToggle} theme={theme}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/redirect">
            <Redirect />
          </Route>
          <Route path="/genre/:genre">
            <Genre />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
        </Switch>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
