import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

import './index.css';

import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import DashboardColaborador from "./pages/DashboardColaborador";
import DashboardCoach from "./pages/DashboardCoach";
import DashboardDirectivo from "./pages/DashboardDirectivo";
import PerfilDirectivo from "./components/PerfilDirectivo";
import PerfilCoach from "./components/PerfilCoach";
import PerfilColaborador from "./components/PerfilColaborador";

import PlanCarrera from "./pages/PlanCarrera";
import RegisterPage from "./pages/RegisterPage"
import PlanForm from "./components/PlanCarrera/PlanForm";
import { CursoProvider } from "./context/Context";

function App() {
  const [user, setUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("Colaborador");

  const handleLogout = () => {
    setUser(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <CursoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} selectedRole={selectedRole} onChange={(evt) => setSelectedRole(evt.target.value)} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cursos" element={<h1> cursos Page</h1>} />
            <Route path="/add-cursos" element={<h1> new curso </h1>} />
            <Route path="/add-planes_carreras" element={<h1> new curso </h1>} />
            <Route path="/cursos/:id" element={<h1> update curso</h1>} />
            <Route path="/profile" element={<h1> profile</h1>} />
            <Route path="*" element={user ? (
              <Sidebar>
                <div className="text-right mt-3">
                  {user ? (
                    <Button onClick={handleLogout} variant='primary'>Log out</Button>
                  ) : null}
                </div>
                <br></br>
                <Routes>
                  {selectedRole === "Colaborador" && <Route index element={<DashboardColaborador user={user} />} />}
                  {selectedRole === "Coach" && <Route index element={<DashboardCoach />} />}
                  {selectedRole === "Directivo" && <Route index element={<DashboardDirectivo />} />}
                  <Route path="/perfil" element={<h1>Perfil cualquiera</h1>} />
                  <Route path="/plan-carrera" element={<PlanCarrera />} />
                  <Route path="/planForm" element={<PlanForm />} />
                </Routes>
              </Sidebar>
            ) : <Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </CursoProvider>
    </AuthProvider>
  );
}

export default App;
