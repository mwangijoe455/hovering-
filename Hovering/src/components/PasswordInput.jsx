import { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [typingStatus, setTypingStatus] = useState("Waiting...");
  const [hoverStatus, setHoverStatus] = useState("Not hovering");
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [{ id: Date.now(), time: timestamp, message }, ...prev]);
  };

  // --- Event handlers ---
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setTypingStatus("Typing...");
    addLog(`Typing: length = ${value.length}`);
  };

  const handleMouseEnter = () => {
    setHoverStatus("Hovering over Submit");
    addLog("Mouse entered Submit");
  };

  const handleMouseLeave = () => {
    setHoverStatus("Not hovering");
    addLog("Mouse left Submit");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length === 0) {
      addLog("Empty submission");
      return;
    }
    addLog(`Submitted (length: ${password.length})`);
    alert("Password sent for review!");
  };

  const clearLogs = () => {
    setLogs([]);
    addLog("Logs cleared");
  };

  return (
    <div className="container">
      <h2>Password Input -Security Monitor</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="pwd">Password:</label>
          <input
            id="pwd"
            type="password"
            value={password}
            onChange={handleChange}      // ← event 1
            placeholder="Type your password..."
            className="input-field"
          />
          <div className="stats">
            <span>{typingStatus}</span>
            <span>Length: {password.length}</span>
          </div>
        </div>

        <button
          type="submit"
          onMouseEnter={handleMouseEnter}  // ← event 2
          onMouseLeave={handleMouseLeave}  // ← event 3
          className={`submit-btn ${hoverStatus.includes("Hovering") ? "hovering" : ""}`}
        >
          Submit
        </button>
        <div className="hover-indicator">{hoverStatus}</div>
      </form>

      <div className="logs-section">
        <div className="logs-header">
          <h3>Event Log</h3>
          <button onClick={clearLogs} className="clear-btn">Clear</button>
        </div>
        {logs.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          <ul className="log-list">
            {logs.map((log) => (
              <li key={log.id} className="log-item">
                <span className="time">[{log.time}]</span> {log.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;