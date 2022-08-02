import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import register from "services/register"

const validateFields = (values) => {
    const errors = {}
    if(!values.username) errors.username = 'Required Username'

    if(!values.password) errors.password = 'Required Password'
    else if (values.password.length < 5) errors.password = 'Length must be greater than 5'

    return errors
}

const initialValues = {username : '', password : ''}

export default function Register() {
    const [registered, setRegistered] = useState(false)

    if(registered) {
        return <h2>Congratulations! You've been successfully registered!</h2>
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, {setFieldError}) => {
                    return register(values) //return promise for know if it's make a submit
                        .then(() => {
                            setRegistered(true)
                        })
                        .catch(() => {
                            setFieldError('username', 'This username is not valid')
                        })
                }}
            >
                {
                    ({errors, isSubmitting}) => <Form>
                            <Field name="username" placeholder="username"/>
                            <ErrorMessage name="username" component="p"/>
                            <Field name="password" placeholder="password" type="password"/>
                            <ErrorMessage name="password" component="p"/>
                            <button className="btn-register" disabled={isSubmitting}>Register</button>
                        </Form>
                }
            </Formik>
        </>
    )
}