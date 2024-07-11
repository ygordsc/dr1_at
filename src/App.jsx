import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { RouterProvider } from 'react-router'
import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { React, useState } from 'react';
import { Navbar, Loading } from './components';
import HandleList from "./utils/HandleList";

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Form = lazy(() => import('./pages/Form'));
const List = lazy(() => import('./pages/List'));

function App() {

  const isLogged = localStorage.getItem("isLogged");
  const [login, setLogin] = useState(isLogged);
  const navigate = useNavigate();
  const headers = ["ID", "Nome", "Preço", "Descrição", "Quantidade"];
  const [data, setData] = useState(JSON.parse(HandleList()));

  useEffect(() => {
    if (isLogged === "false") {
      console.log("Redirecting to login");
      navigate("/login")
    } 
  }, [isLogged]);

  return (
    <>
      {isLogged === "false" ? null : <Navbar login={login} setLogin={setLogin} />}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login login={login} setLogin={setLogin} />} />
          <Route path="/list" element={<List headers={headers} data={data} setData={setData} />} />
          <Route path="/form" element={<Form headers={headers} data={data} setData={setData} />} />
        </Routes>
      </Suspense>
      </>
  );
}

export default App;
