"use client"

import { useRef } from "react";

export default function Sig_in () {
    function handleFocus(event) {
        event.target.placeholder = "";
    }

    function handleUnFocusU(event) {
        event.target.placeholder = "Username";
    }

    function handleUnFocusP(event) {
        event.target.placeholder = "Password";
    }
    
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="h-full w-full bg-black bg-opacity-50 filter blur-sm -z-10 absolute"></div>
            <div className="grid grid-rows-4 grid-flow-col place-items-center gap-10 p-5 bg-white h-80 justify-center filter z-10 absolute">
                <h1 className="text-center mt-3">SIGN IN</h1>
                <input type="text" 
                       className="text-center w-72 h-12 border rounded-full" 
                       placeholder="Username" 
                       onFocus={handleFocus} 
                       onBlur={handleUnFocusU}></input>
                <input type="text" 
                       className="text-center w-72 h-12 border rounded-full" 
                       placeholder="Password"
                       onFocus={handleFocus}
                       onBlur={handleUnFocusP}></input>
                <button className="w-44 h-10 border">CLICK</button>
            </div>
        </div>
    );
}