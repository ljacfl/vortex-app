import {z} from 'zod'

export const registerSchema = z.object({
    nombre_completo: z.string({
        required_error: 'Name is required'
    }),
    email: z.string ({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    usuario: z.string ({
        required_error: 'Username is required'
    }),
    contraseña: z.string ({
        required_error: 'password is required'
    })
    .min(6, {
        message: "Password must at least 6 characters",
    }),
    ubicacion: z.string ({
        required_error: 'location is required'
    }),
    cargo: z.string ({
        required_error: 'cargo is required'
    })
})

export const loginSchema = z.object ({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email",
    }),
    contraseña: z.string({
        required_error: "password is required",
    }).min(6,{
        message: " Password must be at least 6 charaters"
    }),

})