import React from "react"

function Form(props) {
    const { values, submit, change, disabled, errors }= props;
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="container" onSubmit={onSubmit}>
            <div className="form submit">
                <h2>Permission to come aboard Captain?</h2>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.checkbox}</div>
                </div>
                <button disabled={disabled}>submit</button>
            </div>

            <div className="form-inputs">
                <label>
                    Name;
                    <input
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                    />
                </label>

                <label>
                    Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                    />
                </label>
                
                <label>
                    Password
                    <input 
                    value={values.password}
                    onCHange={onChange}
                    name="password"
                    type="text"
                    />
                </label>

                <label>
                    Terms of Service Agreement
                    <input 
                    type="checkbox"
                    name="terms of service"
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )

}

export default Form;