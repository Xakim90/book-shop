import { React, useForm } from 'react-hook-form';

function Sirojiddin() {

    const {
        register,
        handleSubmit,
        watch,
    } = useForm({ mode: 'onChange' });

    const onsubmit = data => console.log('Отправлено:', data);

    const email = watch('email');
    const password = watch('password');
    console.log('Имя: ' + email);
    console.log('возраст: ' + password);

    return (
        <div className="command">
            <h1 className="text-xl font-bold">Registration</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <h1 className="font-serif">email</h1>
                <input
                    className="bg-gray-300 h-10 w-60 rounded-xl"
                    {...register('email')}
                />
                <h1 className="font-serif">password</h1>
                <input
                    className="bg-gray-300 h-10 w-60 rounded-xl"
                    {...register('password')}
                /><hr />
                <br />
                <input type="submit" className="w-60 h-10 bg-blue-400 rounded-xl" />
            </form>
        </div>
    );
}

export default Sirojiddin;
