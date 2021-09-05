import React, { useState } from "react";
<<<<<<< HEAD
// import { uploadImage } from "../../api/api_calls";
=======
>>>>>>> 08d8070b564aadff859427009598b7ed090dca2c

function FileInput({
  refInput = null,
  register,
  label,
  name,
  errors,
  required = false,
  setimageUrl,
}) {
  const [loading, setloading] = useState(false);
  const onChange = (e) => {
    setloading(true);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    // uploadImage(formData).then((res) => {
    //   setloading(false);
    //   setimageUrl(res.data.url);
    // });
  };

  return (
    <label>
      <h5 className="file-label">{label}</h5>
      <div className="file-input-area">
        <div className="file-input-body" ref={refInput}>
          <div className="file-input-text">
            <span className="file-input-label">
              {loading ? "Loading...." : "Выбрать файл"}
            </span>
          </div>
          <input
            className="file-input"
            onChange={onChange}
            type="file"
            placeholder=""
            name={name}
<<<<<<< HEAD
            {...register(name, { required: true })}
=======
            ref={register({ required })}
>>>>>>> 08d8070b564aadff859427009598b7ed090dca2c
          />
        </div>
      </div>
      {errors[name] && <span className="input_error">Обязательно поле</span>}
    </label>
  );
}

<<<<<<< HEAD
export default FileInput;
=======
export default FileInput;
>>>>>>> 08d8070b564aadff859427009598b7ed090dca2c
