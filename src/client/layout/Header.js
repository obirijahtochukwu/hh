import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Header() {
	const link = [
		{ text: "dashboard", url: "/dashboard" },
		{ text: "create agent", url: "/create-agent" },
		{ text: "upload file", url: "/#1" },
	];
	return (
		<div className={style.container}>
			<section>
				{link.map(({ text, url }, index) => {
					return (
						<Link
							to={url}
							key={index}
							className=""
							style={{ width: "fit-content", textDecoration: "none" }}>
							<div className={style.link}> {text}</div>
						</Link>
					);
				})}
			</section>
			<div
				onClick={() => {
					localStorage.removeItem("token");
					window.location.href = "/login";
				}}
				className={style.logout}>
				<div>logout</div>
				<FaTimes />
			</div>
		</div>
	);
}
