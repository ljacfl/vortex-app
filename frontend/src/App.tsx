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
import PlanCarrera from "./pages/PlanCarrera";

function App() {
  const [user, setUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("Colaborador");

  const handleLogout = () => {
    setUser(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} selectedRole={selectedRole} onChange={(evt) => setSelectedRole(evt.target.value)} />} />
          <Route path="/" element={user ? (
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
                <Route path="/plan-carrera" element={<PlanCarrera />} />

              </Routes>
            </Sidebar>
          ) : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
