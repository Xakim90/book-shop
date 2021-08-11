import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = "https://deliver-project.herokuapp.com/api/register"

    const submit = async (e) => {
        e.preventDefault()
        Axios.post(url, user);
    }

    const setUserData = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <div className="flex flex-wrap content-center h-screen justify-center">
                <form onSubmit={submit} autoComplete="off">
                    <h1 className="text-center font-bold text-lg">Registration</h1>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={user.name}
                        name="name"
                        onChange={setUserData}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={user.email}
                        name="email"
                        onChange={setUserData}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        value={user.password}
                        name="password"
                        onChange={setUserData}
                    />
                    <br />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                    <Button
                        type="reset"
                        style={{ marginLeft: "25px" }}
                        variant="contained"
                        color="secondary"
                    >
                        Cancel
                    </Button>
                </form>
            </div>
        </>
    )
}
export default Register;