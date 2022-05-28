import { useState } from "react";

export const useForm = (initialState = {}, request) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = ({target}) =>
        setValues({ ...values, [target.name]: target.value });

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        // fetch to url with the data
			// If fails, set errors
			// If success, set values to initialState and execute callback
    }
	
	const reset = () => setValues(initialState);

    return {values, errors, handleInputChange, handleSubmit, reset};
}