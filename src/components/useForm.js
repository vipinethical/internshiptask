import { useState } from "react";

function useForm(validate) {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return { handleChange, values, handleSumbit, errors };
}

export default useForm;
