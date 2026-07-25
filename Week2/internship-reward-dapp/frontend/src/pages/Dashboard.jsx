import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    API.get("/tasks")
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const approveTask = async (id) => {
    try {
      const res = await API.put(`/tasks/${id}/approve`);

      alert(res.data.message);

      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Approval Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Task Dashboard</h1>

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{task.title}</h3>

          <p>
            <b>Intern ID:</b> {task.internId}
          </p>

          <p>
            <b>GitHub:</b>{" "}
            <a
              href={task.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </p>

          <p>
            <b>Status:</b> {task.status}
          </p>

          {task.status === "Pending" ? (
            <button onClick={() => approveTask(task._id)}>
              Approve
            </button>
          ) : (
            <button disabled>Approved</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;