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
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmF2eWFtaXNzdWxhMTM3QGdtYWlsLmNvbSIsImV4cCI6MTc3ODA1ODI1NiwiaWF0IjoxNzc4MDU3MzU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzZiYzNhNzktYmFjZC00NGZkLTljM2QtYzBlZjY1NzhlMDkwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWlzc3VsYSBzYWkgc3JpIHNyYXZ5YSIsInN1YiI6ImNkYmY0NTc1LTVjNWItNDZhMy1iYjk5LWUwMmQ4NDE3ODRlMyJ9LCJlbWFpbCI6InNyYXZ5YW1pc3N1bGExMzdAZ21haWwuY29tIiwibmFtZSI6Im1pc3N1bGEgc2FpIHNyaSBzcmF2eWEiLCJyb2xsTm8iOiJjc2UyMzEyOSIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImNkYmY0NTc1LTVjNWItNDZhMy1iYjk5LWUwMmQ4NDE3ODRlMyIsImNsaWVudFNlY3JldCI6InNSZUp1WllydVZxV1FnRUUifQ.R6VRUsq1GCq0V6HXKvOFOL0j9PIIwEicCsuMsKoKWK8",
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