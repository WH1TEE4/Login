import React from "react";
import "./login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/label";
import Input from "./components/Input/input";

const Login = () => {
    return (
        <div className="login-container">
            <Title text =  'Soy un Titulo'/>
            <Label text =  'Usuario'/>
            <Input />
            <Label text =  'Contraseña'/>
            <Input />
        </div>
    )
};

export default Login;