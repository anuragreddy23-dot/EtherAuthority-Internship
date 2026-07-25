import { useState } from "react";
import API from "../services/api";

function SubmitTask() {
  const [task, setTask] = useState({
    internId: "",
    title: "",
    githubLink: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/tasks", task);

      alert(res.data.message);

      setTask({
        internId: "",
        title: "",
        githubLink: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Submission Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Submit Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="internId"
          placeholder="Intern ID"
          value={task.internId}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="githubLink"
          placeholder="GitHub Link"
          value={task.githubLink}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
}

export default SubmitTask;