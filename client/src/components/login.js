import React, { useState } from "react";

const Login = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value);
        console.log("setUsername", e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        console.log("setPassword", e.target.value);
    };
    const donate = async () => {
        console.log("donate");
    }
    const login = async () => {
        const un = username;
        const pw = password;
        const query = `mutation{
                authenticate(name:"${un}", password:"${pw}")
            }`;

        console.log("Q:", query)

        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: query,
            }),
        });
        const responseText = await response.text();
        console.log("responseText", responseText);
        const responseData = JSON.parse(responseText);
        const token = responseData.data.authenticate;
        console.log("responseData.token", token)
        setToken(token)
    }
    return (
        <div>
            <p><input type="text" name="username" id="username" value={username} onChange={usernameHandler} placeholder="user name" /></p>
            <p><input type="password" name="password" id="password" value={password} onChange={passwordHandler} placeholder="password" /></p>
            <p><button onClick={login}>Login</button></p>

        </div>)
}
export default Login;