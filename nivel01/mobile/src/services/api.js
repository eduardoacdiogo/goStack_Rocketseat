import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3333",
});

export default api;

/**
 * ios com emulador: localhost
 * dispositivo físico: IP da maquina
 * android com emulador: -> localhost (adb reverse tcp:3333 tcp:3333)
 * android com emulador: 10.0.2.2 (android studio)
 */
