import React, { useState } from "react";

import Header from "./components/Header";

import backgroundImage from "./assets/background.jpeg";

import "./app.css";

export default function App() {
	const [projects, setProjects] = useState([
		"Desenvolvimento agil",
		"Front-end web",
	]);

	function handleAddProject() {
		// projects.push(`Novo projeto ${Date.now()}`);
		setProjects([...projects, `Novo projeto ${Date.now()}`]);
		console.log(projects);
	}
	return (
		<>
			<Header title="Homepage">
				<img width={300} src={backgroundImage} alt="backgroundImage" />
				<ul>
					<li>Homepage</li>
					<li>Projects</li>
					<li>login</li>
				</ul>
			</Header>
			<Header title="Projects" />
			<ul>
				{projects.map((project) => (
					<li key={project}>{project}</li>
				))}
			</ul>

			<button type="button" onClick={handleAddProject}>
				Adicionar projeto
			</button>
		</>
	);
}
