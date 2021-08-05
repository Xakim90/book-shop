import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../static/Input'
import "./Sardor.css";
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'


export default function Sardor() {

    const { register, handleSubmit } = useForm({ mode: 'onChange' })

    const onSubmit = data => console.log('Отправлено:', data)
    
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
                                        {...register(`${input.txt}`)}
                                    />
                                </p>
                            </div>
                        )
                    }) : null
                }
                <button type="submit" className="btn hover:bg-blue-400">
                    Submit
                </button>
            </form>
        </div>
    )
}