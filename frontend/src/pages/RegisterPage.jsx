import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function RegisterPage() {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm()
   const { signup, isAuthenticated } = useAuth()
   const Navigate = useNavigate()

   useEffect(() => {
      if (isAuthenticated) Navigate("/login")
   }, [isAuthenticated])

   const onSubmit = handleSubmit(async (values) => {
      signup(values);
      Navigate("/cursos");
   })

   return (
      <section>
         <div className="card login shadow mb-4">
            <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: "53px" }}>
               <div className="text-center mb-5">
                  <img src="/logo_vortex.png" alt="Image" height="100" className="perfil-alvaro" />
                  <div className="text-900 text-3xl font-medium mb-3 welcome-text">Vortex Bird</div>
                  <div className="card_resumen mb-4">
                     <div className="card-header py-3">
                        <form
                           onSubmit={onSubmit}>
                           <label className="form-label">Usuario</label>
                           <input type="text" {...register("usuario", { required: true })}
                              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                              placeholder='Usuario'
                           />
                           {
                              errors.usuario && (
                                 <p className="text-red-500"> Usuario is required</p>
                              )}
                           <label className="form-label">Nombre</label>
                           <input type="text" {...register("nombre_completo", { required: true })}
                              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                              placeholder='Nombre completo'
                           />
                           {
                              errors.nombre_completo && (
                                 <p className="text-red-500"> Nombre is required</p>
                              )}
                           <label className="form-label">Correo electrónico</label>
                           <input type="email" {...register("email", { required: true })}
                              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                              placeholder='Correo electrónico'
                           />
                           {
                              errors.email && (
                                 <p className="text-red-500"> email is required</p>
                              )}
                           <label className="form-label">Contraseña</label>
                           <input type="password" {...register("contraseña", { required: true })}
                              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                              placeholder='Contraseña'
                           />
                           {
                              errors.contraseña && (
                                 <p className="text-red-500"> contraseña is required</p>
                              )}
                           <Button type='submit'> Register </Button>
                        </form>



                     </div>

                  </div>
                  <Link to="/">
               <Button>Atrás</Button>
            </Link>
               </div>
            </div>
            
         </div>
      </section>
   )
}

export default RegisterPage