import './App.css';
import Form from "./Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./formSchema";
import * as yup from "yup";
import styled from "styled-components"


const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialSignee = [];
const initialDisabled = true;

const Wrap = styled.pre`
  white-space: pre-wrap;
`;

export default function App() {
  const [forms, setForms] = useState(initialSignee);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); 


  const postNewForm = (newForm) => {
    axios
      .post("https://reqres.in/api/users", newForm)
      .then((res) => {
        setForms([res.data, ...forms]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newForm = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ["checkbox"].filter
    };
    postNewForm(newForm);
  };

  
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Come Aboard</h1>
      </header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <Wrap> 
        {JSON.stringify(forms)}
      </Wrap>
    </div>
  );
}

