import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    const upperCaseHandler = (event) => {
        setText(text.toLocaleUpperCase());
    };

    const lowerCaseHandler = (event) => {
        setText(text.toLocaleLowerCase());
    };

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                onChange={onChangeHandler}
                value={text}>
            </textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm