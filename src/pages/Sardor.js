import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../static/Input'
import "./Sardor.css";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().required().email(),
})


export default function Sardor() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => console.log(data)
    console.log(errors)
    return (
        <div className="command">
            <h1 className="text-xl font-bold text-center">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    Input.inputs ? Input.inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <p>
                                    <label>{input.label}</label>
                                </p>
                                <p>
                                    <input
                                        name={input.name}
                                        className="input"
                                        type={input.type}
                                        ref={{...register}}
                                    />
                                </p>
                                <p className="messages">{errors}</p>
                            </div>
                        )
                    }) : null
                }
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}