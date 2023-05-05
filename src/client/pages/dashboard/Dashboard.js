import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { membersData, pieChartData } from "./mockData";
import Header from "../../layout/Header";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const [auth, setAuth] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const auth = localStorage.getItem("password");
		setAuth(auth);
		// return () => setAuth("");
	}, []);

	if (!auth) {
		navigate("/login");
	}

	return (
		<div className={`${style.container}`}>
			<Header />
			<section className={style.userProfile}>
				<div className="d-flex align-items-center">
					<img
						src="/client/image 10 (1).svg"
						alt=""
					/>
					<div className="">
						<div className={style.title}>Kris Millar</div>
						<div className={style.text}>krissmiller@gmail.com</div>
					</div>
				</div>
				<div className={style.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					ultrices velit a nulla placerat, vitae accumsan mauris euismod. Nam
					semper dignissim est a sollicitudin. Vestibulum non ipsum tellus.
					Vivamus a eros nec sapien vestibulum.
				</div>

				<div className={style.description}>
					<div>
						<span className={style.title}>Guild</span>
						<span className={style.text}>DAO Operation Guild</span>
					</div>
					<div>
						<span className={style.title}>Pod</span>
						<span className={style.text}>Regen Pod</span>
					</div>
				</div>

				<div className={style.charts}>
					{pieChartData.map(({ num, title }, index) => {
						return (
							<div
								key={index}
								className="d-flex flex-column text-center gap-2">
								<div className={style.chart}>{num}</div>
								<div className={style.title}>{title}</div>
							</div>
						);
					})}
				</div>
			</section>

			<article className={style.members}>
				<div className="d-flex align-items-center gap-2">
					<div className={style.title}>New Members</div>
					<div className={style.text}>{membersData.length}</div>
				</div>
				<div className={style.member}>
					{membersData.map(({ img, name, category, date, time }, index) => {
						return (
							<div
								key={index}
								className={`d-flex align-items-center justify-content-between`}>
								<div className="d-flex items-items-center gap-2 align-items-center">
									<img
										src={img}
										alt=""
										className={style.membersImg}
									/>
									<div>
										<div className={style.title}>{name}</div>
										<div className={style.text}>{category}</div>
									</div>
								</div>
								<div className="">
									<div className={`d-flex justify-content-end ${style.title}`}>
										{date}
									</div>
									<div className={style.text}>{time}</div>
								</div>
							</div>
						);
					})}
				</div>
			</article>

			<div className={style.pink}></div>
			<div className={style.bigPink}></div>
			<div className={style.blue}></div>
			<div className={style.bigBlue}></div>
		</div>
	);
}
