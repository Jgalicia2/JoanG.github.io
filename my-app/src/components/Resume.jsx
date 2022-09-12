import React from "react";
import pdf from "./documents/JG_Resume.pdf";
//TODO: This is great but ben lin did it better
//find a better way of designing this
const Resume = () => {
    return (
        <div>
            <h1> Resume </h1>
            <div>
                <iframe title="Resume" src={pdf} width="500px" height="700px">This is the Resume</iframe>
            </div>
            <a href={pdf}>Get a better View </a>
        </div>
    );
};

export default Resume;