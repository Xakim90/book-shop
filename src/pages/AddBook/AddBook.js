import React, { useState, useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from "axios";
import { useForm } from "react-hook-form";
import { getLayoutFields } from "./items";
import SelectClassic from "../../components/SelectClassic";
import { arrayToFormData } from "../../utils/helpers";
import FileInput from "../../components/FileInput";


const getField = ({ field, register, errors }) => {
    switch (field.type) {
        case "text":
            return (
                <label className="flex" key={field.name}>
                    <span className="label_title">{field.label}</span>
                    <input
                        className="primary"
                        name={field.name}
                        {...register(field.name, { required: true })}
                    />
                    {errors[field.name] && (
                        <span className="input_error">Obyaztelno pole</span>
                    )}
                </label>
            );
        case "select":
            return (
                <label className="flex" key={field.name}>
                    <div>
                        {errors[field.name] && (
                            <span className="input_error">Obyaztelno pole</span>
                        )}
                        <SelectClassic
                            type="secondary fs14"
                            register={register}
                            name={field.name}
                            options={field.options ? field.options : []}
                            placeholder={field.label}
                        />
                    </div>
                </label>

            );

        default:
            break;
    }
}

const AddBook = () => {
    //const [imageUrl, setimageUrl] = useState=("");
    const [file, setFile] = useState(null);
    const inputFile = useRef(null)
    const url = "https://deliver-project.herokuapp.com/api/books";

    const handleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        console.log(file)
    }

    const onEdit = () => {
        inputFile.current.click()
    }

    const onDelete = () => {
        setFile("")
    }


    /*  const submit = async (e) => {
         e.preventDefault();
         let res = Axios.post(url, book);
         if (res.data) {
             console.log(res.data)
         }
     } */

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        let newData = arrayToFormData(data);
        debugger
        let res = await Axios.post(url, newData)
        console.log(res);
    }
    return (
        <>
            <div className="flex h-screen flex-wrap content-center justfy-center">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <p className="text-center font-bold text-lg">Registratsiya</p>
                        <br />
                        {getLayoutFields().map((field) => {
                            return getField({ field, register, errors })
                        })}
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
            </div>
        </>
    )

}



export default AddBook;