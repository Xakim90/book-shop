import React, { useState, useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from "axios";
import { useForm } from "react-hook-form";
import { getLayoutFields } from "./items";
import SelectClassic from "../../components/SelectClassic";
import FileUpload from "../../components/FileUpload";
import UploadButton from "../../components/UploadButton";
import { arrayToFormData } from "../../utils/helpers";
import FileInput from "../../components/FileInput";
import { field_settings } from "./offer_fields";

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
                        <span className="input_error">Обязательно поле</span>
                    )}
                </label>
            );
        case "select":
            return (
                <label className="flex" key={field.name}>
                    <div>
                        {errors[field.name] && (
                            <span className="input_error">Обязательно поле</span>
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
        // case "file":
        // case "image":
        //     return (
        //         <label className="flex" key={field.name}>
        //             <div>
        //                 {errors[field.name] && (
        //                     <span className="input_error">Обязательно поле</span>
        //                 )}
        //                 <UploadButton 
        //                     text={field.label}
        //                     register={register}
        //                     name={field.name}
        //                     accept={field.accept}
        //                 />
        //             </div>

        //         </label>
        //     );
        default:
            break;
    }
};

const AddBook = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);
    // const inputFile = useRef(null);
    //const url = "https://deliver-project.herokuapp.com/api/books";
    const url = "http://localhost:8000/api/books";

    // const handleFile = (e) => {
    //     debugger
    //     setFile(URL.createObjectURL(e.target.files[0]));
    //     console.log(file);
    // };

    // const onEdit = () => {
    //     inputFile.current.click();
    // };

    const onDelete = () => {
        setFile("");
    };

    const change = (e) => {
        const file = e.target.files[0];

    }

    // const submit = async (e) => {
    //     e.preventDefault();
    //     let res = Axios.post(url, book);
    //     if (res.data) {
    //         console.log(res.data)
    //     }
    // }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        // formData.append("name", data.name);
        formData.append("file", selectedFile);
        formData.append("author", data.author);
        formData.append("availability", data.availability);
        formData.append("category_id", data.category_id);
        formData.append("description", data.description);
        formData.append("title", data.title);
        Axios
            .post(url, formData)
            .then((res) => {
                setFile(res.data);
                // alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    };
    // const onSubmit = async (data) => {
    //     // let newData = arrayToFormData(data);
    //     // let res = await Axios.post(url, newData);
    //     console.log(data);
    // }
    return (
        <>
            <div className="flex h-screen flex-wrap content-center justify-center">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <p className="text-center font-bold text-lg">Registratsiya</p>
                        <br />
                        {getLayoutFields().map((field) => {
                            return getField({ field, register, errors });
                        })}
                        <br />
                        {/* <input ref={register} type="file" name="file" onChange={change} /> */}
                        <FileUpload
                            setFile={setFile}
                            onFileSelectSuccess={(file) => setSelectedFile(file)}
                            onFileSelectError={({ error }) => alert(error)}
                        />

                        {file
                            ?
                            <img src={file.file_path} alt="rasm" />
                            :
                            null
                        }
                        {/* <FileInput
                            refInput={inputFile}
                            register={register}
                            name="file"
                            onChange={handleFile}
                            errors={errors} /> */}

                        {/* <FileInput
                            name="file"
                            register={register}
                            errors={errors}
                            onChange={handleFile}
                            refInput={inputFile}
                        /> */}
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