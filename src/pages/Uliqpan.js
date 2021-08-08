import { React, useForm } from 'react-hook-form';


function Uliqpan() {

    const {
        register,
        handleSubmit,
        watch,
    } = useForm({ mode: 'onChange' });

    const onsubmit = data => console.log("Jonatish:", data);

    const name = watch("name");
    const surname = watch("surname");
    const email = watch("email");
    const password = watch("password");
    console.log('Name: ' + name);
    console.log('Surname: ' + surname);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    return (
        <div className="bg-white w-10/12 text-center h-4/6 mt-10 ml-10">
            <div className="div">
            <h1 className="text-xl text-center">R♥e♥g♥i♥s♥t♥e♥e♥r</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <h1>𝗡𝗮𝗺𝗲</h1>
                <input
                    className="bg-gray-300 h-10 w-5/12 rounded-lg"
                    {...register('name')}
                />
                <h1>𝐒𝐮𝐫𝐧𝐚𝐦𝐞</h1>
                <input
                    className="bg-gray-300 h-10 w-5/12 rounded-lg"
                    {...register('surname')}
                />
                <h1>𝐄𝐦𝐚𝐢𝐥</h1>
                <input
                    className="bg-gray-300 h-10 w-5/12 rounded-lg"
                    {...register('email')}
                />
                <h1>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</h1>
                <input
                    className="bg-gray-300 h-10 w-5/12 rounded-lg"
                    {...register('password')}
                />

                <br />
                <br />
                <button type="Register" className="bg-black text-white h-10 w-5/12 rounded-lg">Register</button>
                   
            </form>
            </div>
        </div>
    );
}

export default Uliqpan; 