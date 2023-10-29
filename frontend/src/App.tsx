import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import React from "react"; // Importa React desde 'react'

import RegisterPage from "./pages/registerpage"
import LoginPage from "./pages/loginpage"

function App() {
  return(
    <AuthProvider> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<h1> Home Page</h1>} />
        <Route path="/login" element= {<LoginPage/>} />
        <Route path="/register" element= {<RegisterPage />} />
        <Route path="/cursos" element= {<h1> cursos Page</h1>} />
        <Route path="/add-cursos" element= {<h1> new curso </h1>} />
        <Route path="/cursos/:id" element= {<h1> update curso</h1>} />
        <Route path="/profile" element= {<h1> profile</h1>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App