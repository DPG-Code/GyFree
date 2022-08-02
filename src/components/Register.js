import { useState } from "react"
import { useForm } from "react-hook-form"
import registerService from "services/register"

export default function Register() {
    const {handleSubmit, register, formState: { errors }} = useForm()

    const [registered, setRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = (values) => {
        setIsSubmitting(true)
        registerService(false)
            .then(() => {
                setRegistered(true)
                setIsSubmitting(false)
            })
    }

    if(registered) {
        return <h2 className="congratulations">Congratulations! You've been successfully registered!</h2>
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="username-register"
                    name="username"
                    {...register("username", {required: "Required a username",})}
                    placeholder="username"
                />
                <p className="error">{errors.username && errors.username.message}</p>
                <input
                    className="password-register"
                    name="password"
                    {...register("password", {required: "Required a password",})}
                    type="password"
                    placeholder="password"
                />
                <p className="error">{errors.password && errors.password.message}</p>
                <button className="btn-register" disabled={isSubmitting}>Register</button>
            </form>
        </div>
    )
}