import React, {FC} from 'react'
import Films_page from "./pages/Films_page/Films_page";
import Home_page from "./pages/Home_page/Home_page";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Film_page from "./pages/Film_page/Film_page";

const App: FC = () => {
  return (
      <Routes>
        <Route
            path="/"
            element={
              <Layout>
                  <Home_page />
              </Layout>
            }
        />
        <Route
            path="/Katalog"
            element={
                <Layout>
                    <Films_page/>
                </Layout>
            }
        />
        <Route
            path="/Katalog/:id"
            element={
                <Layout>
                    <Film_page />
                </Layout>
            }
        />

      </Routes>
  );
}

export default App
