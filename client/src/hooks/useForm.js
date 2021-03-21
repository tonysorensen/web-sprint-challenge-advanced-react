// write your custom hook here to control your checkout form
import {useState} from "react";


export const useForm = (key, initialValue) => {
const [showSuccess, setShowSuccess] = useState(false);
const [values, setValues] = useState(key, initialValue);

const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
};

const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
};

return [values, showSuccess, handleChanges, handleSubmit]

}
