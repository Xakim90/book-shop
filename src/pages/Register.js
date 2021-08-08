import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from "axios"

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const url = "https://deliver-project.herokuapp.com/api/register"

    const submit = async  (e) => {
        e.preventDefault();
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
            <div className="flex h-screen flex-wrap content-center justify-center">
                <div>
                    <form onSubmit={submit} noValidate autoComplete="off">
                        <p className="text-xl font-bold text-center">Registratsiya</p>
                        <br />
                        <br />
                        <TextField 
                        id="outlined-basic" 
                        label="Ism"
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
                        label="Parol" 
                        variant="outlined"
                        value={user.password}
                        name="password"
                        onChange={setUserData}
                        />
                         <Button 
                    type="submit"
                    variant="contained" 
                    color="secondary"
                    >
                        Register
                    </Button>
                    <Button
                    type="reset"
                     style={{marginLeft: "25px"}} 
                    variant="contained" 
                    color="primary">
                        Cancel 
                    </Button>
                    </form>
                    
                   
                </div>

            </div>
        </>
    )
}
export default Register;