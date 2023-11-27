import React from "react";
import "./FormInt.css";

const FormInt = ({ handleSubmit, handleChange, inputData }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="file-input">
                    <input type="text" className="input-form" value={inputData} onChange={handleChange} />
                    <button type="submit" className="btn button-create" disabled={inputData ? "" : "disabled"}>
                        Crear
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormInt;
