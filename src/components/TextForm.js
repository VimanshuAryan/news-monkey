import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('');

    const upperCaseHandler = (event) => {
        setText(text.toLocaleUpperCase());
        props.showAlert("Converted to Uppercase !", "success");
    };

    const lowerCaseHandler = (event) => {
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to Lowercase !", "success");
    };

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const copyTextHandler = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard !","success");
    };

    const extraSpacesHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !", "success");
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        className="form-control"
                        id="myBox"
                        rows="8"
                        onChange={onChangeHandler}
                        value={text}>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={copyTextHandler}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={extraSpacesHandler}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm