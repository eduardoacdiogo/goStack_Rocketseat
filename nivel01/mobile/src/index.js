import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	FlatList,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";

import api from "./services/api";

// Não possuem valor semântico (significado)
// Todos componentes possuem por padrão display: flex
// View: div, footer, header, main, aside, section
// text: p, span, strong, h1, h2, h3

export default function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get("projects").then((response) => {
			console.log(response.data);
			setProjects(response.data);
		});
	}, []);

	async function handleAddProject() {
		const response = await api.post("projects", {
			title: "Novo projeto",
			owner: "Testando react-native",
		});

		const project = response.data;

		setProjects([...projects, project]);
	}

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#7159c1" />

			<SafeAreaView style={styles.container}>
				<FlatList
					data={projects}
					keyExtractor={(project) => project.id}
					renderItem={({ item: project }) => (
						<Text style={styles.project}>{project.title}</Text>
					)}
				/>

				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.button}
					onPress={handleAddProject}
				>
					<Text style={styles.buttonText}>Adicionar projeto</Text>
				</TouchableOpacity>
			</SafeAreaView>

			{/* <View style={styles.container}>
				<Text style={styles.title}> Hello GoStack </Text>
				{projects.map((project) => (
					<Text style={styles.project} key={project.id}>
						{project.title}
					</Text>
				))}
			</View> */}
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7159c1",
		// justifyContent: "center",
		// alignItems: "center",
	},

	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#FFF",
	},

	project: {
		fontSize: 30,
		color: "#FFF",
	},

	button: {
		backgroundColor: "#FFF",
		margin: 20,
		height: 50,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#000",
		fontWeight: "bold",
		fontSize: 16,
	},
});
