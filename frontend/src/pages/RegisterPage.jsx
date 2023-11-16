import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

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
      <div className="bg-slate-800 max-w-md p-10 rounded-md">
         <form
            onSubmit={onSubmit}>

            <input type="text" {...register("usuario", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='Usuario'
            />
            {
               errors.usuario && (
                  <p className="text-red-500"> Usuario is required</p>
               )}
            <input type="text" {...register("nombre_completo", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='nombre_completo'
            />
            {
               errors.nombre_completo && (
                  <p className="text-red-500"> Nombre is required</p>
               )}
            <input type="email" {...register("email", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='email'
            />
            {
               errors.email && (
                  <p className="text-red-500"> email is required</p>
               )}
            <input type="password" {...register("contraseña", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='contraseña'
            />
            {
               errors.contraseña && (
                  <p className="text-red-500"> contraseña is required</p>
               )}
            <input type="text" {...register("ubicacion", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='Ubicacion'
            />
            {
               errors.ubicacion && (
                  <p className="text-red-500"> Ubicacion is required</p>
               )}
            <input type="text" {...register("cargo", { required: true })}
               className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
               placeholder='cargo'
            />
            {
               errors.cargo && (
                  <p className="text-red-500"> cargo is required</p>
               )}
            <button type='submit'> Register </button>
         </form>



      </div>
   )
}

export default RegisterPage