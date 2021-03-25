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
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className="form-inputs">
                <label>
                    Name
                    <input
                    value={values.username}
                    onChange={onChange}
                    name="username"
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
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                </label>

                <label>
                    Terms of Service Agreement
                    <input
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </div>
        </form>
    )

}

export default Form;