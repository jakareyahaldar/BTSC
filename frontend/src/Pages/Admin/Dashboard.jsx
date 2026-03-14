import { useState } from "react";

export default function AdminDashboard() {

  const [admin, setAdmin] = useState({
    name: "Admin",
    username: "admin",
    password: "",
    avatar: ""
  });

  const [users, setUsers] = useState([
    { id: 1, name: "User One", email: "user1@mail.com" },
    { id: 2, name: "User Two", email: "user2@mail.com" }
  ]);

  const [pdfBooks, setPdfBooks] = useState([]);
  const [videos, setVideos] = useState([]);

  const [pdfTitle, setPdfTitle] = useState("");
  const [pdfLink, setPdfLink] = useState("");

  const [videoTitle, setVideoTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const updateAdmin = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const addPdf = () => {
    if (!pdfTitle || !pdfLink) return alert("Fill all fields");

    setPdfBooks([...pdfBooks, { title: pdfTitle, link: pdfLink }]);
    setPdfTitle("");
    setPdfLink("");
  };

  const addVideo = () => {
    if (!videoTitle || !videoLink) return alert("Fill all fields");

    setVideos([...videos, { title: videoTitle, link: videoLink }]);
    setVideoTitle("");
    setVideoLink("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6 space-y-8 py-20">

      {/* Profile Section */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Admin Profile</h2>

        <input
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          value={admin.avatar}
          onChange={updateAdmin}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={admin.name}
          onChange={updateAdmin}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={admin.username}
          onChange={updateAdmin}
          className="border p-2 w-full mb-2"
        />

        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={admin.password}
          onChange={updateAdmin}
          className="border p-2 w-full"
        />
      </div>


      {/* Manage Users */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Manage Users</h2>

        {users.map((u) => (
          <div
            key={u.id}
            className="flex justify-between border p-2 mb-2"
          >
            <div>
              <p>{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>

            <button
              onClick={() => deleteUser(u.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>


      {/* Add PDF Book */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add PDF Book</h2>

        <input
          type="text"
          placeholder="PDF Title"
          value={pdfTitle}
          onChange={(e) => setPdfTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="PDF Link"
          value={pdfLink}
          onChange={(e) => setPdfLink(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={addPdf}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add PDF
        </button>

        <div className="mt-4">
          {pdfBooks.map((b, i) => (
            <p key={i} className="border p-2 mb-1">
              {b.title}
            </p>
          ))}
        </div>
      </div>


      {/* Add Video */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add Video</h2>

        <input
          type="text"
          placeholder="Video Title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="Video Link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={addVideo}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Video
        </button>

        <div className="mt-4">
          {videos.map((v, i) => (
            <p key={i} className="border p-2 mb-1">
              {v.title}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}