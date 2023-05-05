import React, { useEffect, useState } from "react";
import loginStyle from "./index.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Index() {
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [auth, setAuth] = useState("");
	const navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		axios
			.post("http://52.205.252.14/api/login/", {
				username: name,
				password: password,
			})
			.then((res) => {
				localStorage.setItem("token", JSON.stringify(res.data.token));
				setPassword("");
				setName("");
				window.location.href = "/create-agent";
			});
	};
	useEffect(() => {
		const auth = localStorage.getItem("token");
		setAuth(auth);
		// return () => setAuth("");
	}, []);

	if (auth) {
		navigate("/dashboard");
	}

	return (
		<div className={`${loginStyle.container}`}>
			<article>
				<div>
					<div className={loginStyle.title}>Signin to New Agent Direct</div>
					<div className={loginStyle.text}>
						if you don’t an account you can <a href="#6">Register here!</a>
					</div>
				</div>
				<img
					src="/client/Character 1.svg"
					alt=""
					className={loginStyle.img}
				/>
				<form onSubmit={login}>
					<div className={loginStyle.inputContainer}>
						<input
							type="text"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<img
							src="/client/X.svg"
							alt=""
							className={loginStyle.clearIcon}
						/>
					</div>
					<div className={loginStyle.inputContainer}>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Enter password"
						/>
						<img
							src="/client/X.svg"
							alt=""
							className={loginStyle.clearIcon}
						/>
					</div>

					<button type="submit">Submit</button>
				</form>
				<div className={loginStyle.pink}></div>
				<div className={loginStyle.bigPink}></div>
				<div className={loginStyle.blue}></div>
				<div className={loginStyle.bigBlue}></div>
			</article>
		</div>
	);
}
