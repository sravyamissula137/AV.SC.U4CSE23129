import axios from "axios";

const ALLOWED_STACKS = ["frontend"];

const ALLOWED_LEVELS = [
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
];

const ALLOWED_PACKAGES = [
    "api",
    "component",
    "hook",
    "page",
    "state",
    "style",
    "auth",
    "config",
    "middleware",
    "utils",
];

export const Log = async (
    stack,
    level,
    packageName,
    message
) => {
    if (!ALLOWED_STACKS.includes(stack)) {
        console.warn(`Invalid stack: ${stack}`);
    }

    if (!ALLOWED_LEVELS.includes(level)) {
        console.warn(`Invalid level: ${level}`);
    }

    if (!ALLOWED_PACKAGES.includes(packageName)) {
        console.warn(`Invalid package: ${packageName}`);
    }

    try {
        const response = await axios.post(
            `/api/logs`,
            {
                stack,
                level,
                package: packageName,
                message,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Log Success:", response.data);

        return response.data;
    } catch (error) {
        console.error("Logger Error:", error.message);
    }
};