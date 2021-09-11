import { React, useForm } from 'react-hook-form';
import Styles from './Sirojiddin.module.css'

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
        <div className={Styles.center}>
            <div className="border-2 border-gray-200 h-5/6 w-72 rounded-xl bg-gray-300 shadow-2xl">
                <div className="ml-6 my-5">
                    <h1 className="text-xl font-bold">Registration</h1>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <h1 className="font-serif shadow-xl">email</h1>
                        <input
                            className="h-10 w-60 rounded-xl"
                            {...register('email')}
                        />
                        <h1 className="font-serif shadow-2xl">password</h1>
                        <input
                            className="h-10 w-60 rounded-xl"
                            {...register('password')}
                        />
                        <br />
                        <br />
                        <input type="submit" className="w-60 h-10 bg-blue-400 rounded-xl" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sirojiddin;
