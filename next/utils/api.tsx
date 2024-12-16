export const fetchTasksAPI = async (status) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/tasks/${status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const addNewTasksAPI = async (formData) => {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/add-new-task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to create task");

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
