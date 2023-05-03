/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { RequireAuth } from "./context/Auth/RequireAuth"
import { KeyForm } from "./pages/KeyForm"
import {
  BrowserRouter, Route,
  Routes,
} from 'react-router-dom'
import { CharList } from "./pages/CharList"
import { ComicList } from "./pages/ComicList"
import { CreatorList } from "./pages/CreatorList"
import { Char } from "./pages/Char"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import * as themes from "./styles/themes/themes"
import { Comic } from "./pages/Comic";
import { Creator } from "./pages/Creator";
import { useCookie } from "./hooks/useCookie";
import { AuthProvider } from "./context/Auth/AuthProvider";



export const App = () => {
  const cookieHook = useCookie();
  const [theme, setTheme] = useState(themes.marvelDark);

  useEffect(() => {
    const themeName = cookieHook.getItem('themeName')
    if (themeName) {
      let key: keyof typeof themes;
      for (key in themes) {
        if (themes[key].title === themeName) {
          setTheme(themes[key])
        }
      }
    }
  }, [])


  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<KeyForm setTheme={setTheme} />}></Route>
            <Route path="/char-list" element={<RequireAuth setTheme={setTheme}><CharList /></RequireAuth>}></Route>
            <Route path="/comic-list" element={<RequireAuth setTheme={setTheme}><ComicList /></RequireAuth>}></Route>
            <Route path="/creator-list" element={<RequireAuth setTheme={setTheme}><CreatorList /></RequireAuth>}></Route>
            <Route path="/char/:id" element={<RequireAuth setTheme={setTheme}><Char /></RequireAuth>}></Route>
            <Route path="/comic/:id" element={<RequireAuth setTheme={setTheme}><Comic /></RequireAuth>}></Route>
            <Route path="/creator/:id" element={<RequireAuth setTheme={setTheme}><Creator /></RequireAuth>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

