import * as React from "react";
import './customButton.css';

// @ts-ignore
function customButton({onPress, title, href}) {
    return (
        <div>
            <a href={href}>
            <button type={"button"} onClick={onPress} className={"button buttonText"} style={{
                backgroundColor: "white",
                borderColor: 'rgb(159,163,213)',
                color: 'rgb(70,76,174)',
            }}
            >
                {title}
            </button>
            </a>
        </div>
    );
}

export default customButton;
