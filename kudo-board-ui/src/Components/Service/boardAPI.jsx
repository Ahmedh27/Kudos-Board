import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getBoards = async () => {
    try {
        const response = await axios.get(`${baseUrl}/boards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching boards:", error);
    }
}