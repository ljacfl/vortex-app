// Login.js (Página de inicio de sesión)
import { useState } from "react";
import { Button } from "react-bootstrap";



const Login = ({ setUser, selectedRole, onChange }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const roles = ["Directivo", "Coach", "Colaborador"];

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (name === "" || password === "") {
            setError(true)
            return
        }

        setError(false)

        setUser([name]) //
    }

    return (
        <section>
            <div className="card login shadow mb-4">
                <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                    <div className="text-center mb-5">
                    
                        <img src="/logo_vortex.png" alt="Image" height="100" className="perfil-alvaro" />
                        
                        <div className="text-900 text-3xl font-medium mb-3 welcome-text">Welcome!</div>
                        <span className="text-600 font-medium sign-in-text">Sign in to continue</span>
                        <div className="role-selector">
                            <select
                                id="roleSelect"
                                value={selectedRole}
                                onChange={(e) => onChange(e.target.value)}
                            >
                                {roles.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>


                <form className="login" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="User"
                        value={name}
                        onChange={evt => setName(evt.target.value)} //Capturo el input del name
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                    />
                    <Button type="submit">Sign in</Button>

                </form>
                {error && <span className="campos-obligatorios">Los campos son obligatorios.</span>}

            </div>

        </section>
    );
};

export default Login;