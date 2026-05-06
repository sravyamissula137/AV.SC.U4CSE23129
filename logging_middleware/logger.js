const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const Log = async (stack, level, pkg, message) => {
    try {
        const response = await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: pkg,
                message,
            },
            {
                headers: {
                    Authorization: "Bearer NEXT_PUBLIC_AUTH_TOKEN",
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Log created:", response.data);
    } catch (error) {
        console.error("Logging failed");
    }
};

module.exports = Log;