import React from "react";
import "./styles.css";

const InfoInput = (props) => (
    <div 
        className={props.value !== "" ? "InputBox Filled" : "InputBox"}
        id={props.name}
        // style={{gridArea: props.name}}
    >
        <input 
            type="text"
            name={props.name}
            value={props.value}
            onChange={(e) => props.setValue(e)}
        />
        <span className="Placeholder">{props.placeholder}</span>
    </div>
);

export default InfoInput;