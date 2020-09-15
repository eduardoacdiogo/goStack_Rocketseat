import React, { useState, useEffect } from "react";
import api from "./services/api";

import Header from "./components/Header";

import backgroundImage from "./assets/background.jpeg";

import "./app.css";

export default function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get("/projects").then((response) => {
			setProjects(response.data);
		});
	}, []);

	function handleAddProject() {
		// projects.push(`Novo projeto ${Date.now()}`);
		setProjects([...projects, `Novo projeto ${Date.now()}`]);
		console.log(projects);
	}
	return (
		<>
			<Header title="Homepage">
				<ul>
					<li>Homepage</li>
					<li>Projects</li>
					<li>login</li>
				</ul>
			</Header>
			<Header title="Projects" />
			<ul>
				{projects.map((project) => (
					<li key={project.id}>{project.title}</li>
				))}
			</ul>

			<button type="button" onClick={handleAddProject}>
				Adicionar projeto
			</button>
			<img width={300} src={backgroundImage} alt="backgroundImage" />
		</>
	);
}
