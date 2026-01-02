// Simulated API service
export const api = {
    login: async (username, password) => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock validation
        // For this demo, accept any non-empty strings
        if (username && password) {
            if (password === "error") {
                throw new Error("Invalid credentials");
            }
            return {
                id: "1",
                name: "Amit User",
                email: "amit@example.com",
                username: username,
                avatar: "https://ui-avatars.com/api/?name=Amit+User&background=0D8ABC&color=fff"
            };
        } else {
            throw new Error("Username and password are required");
        }
    },

    getProfile: async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return {
            bio: "Full Stack Developer",
            skills: ["React", "Node.js", "Python"]
        };
    }
};
