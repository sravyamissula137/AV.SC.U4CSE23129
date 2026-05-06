import axios from "axios";
import { Log } from "../utils/logger";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchNotifications = async (
    page = 1,
    limit = 10,
    notificationType = ""
) => {
    try {
        await Log(
            "frontend",
            "info",
            "api",
            "Fetching notifications"
        );

        const response = await api.get("/notifications", {
            params: {
                page,
                limit,
                notification_type: notificationType && notificationType !== 'All' ? notificationType : undefined,
            },
        });

        await Log(
            "frontend",
            "info",
            "api",
            "Successfully fetched notifications"
        );

        // Handle possible different response structures from API
        if (Array.isArray(response.data)) {
            return { notifications: response.data, totalPages: 1 };
        }

        return {
            notifications: response.data.notifications || response.data.data || [],
            totalPages: response.data.totalPages || response.data.total_pages || 1,
            total: response.data.total || 0
        };
    } catch (error) {
        await Log(
            "frontend",
            "error",
            "api",
            "Failed fetching notifications"
        );
        throw error;
    }
};