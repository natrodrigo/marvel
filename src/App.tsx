import { useState } from "react";

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
import { marvelDark } from "./styles/themes/themes"





export const App = () => {
  const [theme, setTheme] = useState(marvelDark);

  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<KeyForm setTheme={setTheme} />}></Route>
          <Route path="/char-list" element={<RequireAuth setTheme={setTheme}><CharList /></RequireAuth>}></Route>
          <Route path="/hq-list" element={<RequireAuth setTheme={setTheme}><ComicList /></RequireAuth>}></Route>
          <Route path="/creator-list" element={<RequireAuth setTheme={setTheme}><CreatorList /></RequireAuth>}></Route>
          <Route path="/char/:id" element={<RequireAuth setTheme={setTheme}><Char /></RequireAuth>}></Route>
          <Route path="/hq/:id" element={<RequireAuth setTheme={setTheme}><CreatorList /></RequireAuth>}></Route>
          <Route path="/creator/:id" element={<RequireAuth setTheme={setTheme}><CreatorList /></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

