import axios from "axios";

const baseUrl = "https://kudos-board-sn57.onrender.com";

export const getBoards = async () => {
    try {
        const response = await axios.get(`${baseUrl}/boards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching boards:", error);
    }
}