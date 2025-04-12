import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoPage from "./pages/TodoPage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async()=>{
    try{
      const token = sessionStorage.getItem("token");
      // const response = api.get("/user/")
    }catch(error){

    }
  }

  return (
    <Routes>
      <Route path="/" 
      element={
      <PrivateRoute user={user}>
        <TodoPage />
      </PrivateRoute>}
      />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
