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
        return <h2>Congratulations! You've been successfully registered!</h2>
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="username" {...register("username", {required: "Required a username",})} placeholder="username"/>
                <p>{errors.username && errors.username.message}</p>
                <input name="password" {...register("password", {required: "Required a password",})} type="password" placeholder="password"/>
                <p>{errors.password && errors.password.message}</p>
                <button className="btn-register" disabled={isSubmitting}>Register</button>
            </form>
        </>
    )
}