import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUserForm from "../components/EditUserForm";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
      const data = await response.json();

      if (response.ok) {
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } else {
        setError("Failed to fetch users.");
      }
    } catch (err) {
      setError("An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });

      if (response.ok) {
        setMessage("User deleted successfully.");
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        setMessage("Failed to delete user.");
      }
    } catch (err) {
      setMessage("An error occurred while deleting the user.");
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Users List</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && (
        <>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
          {editingUser && (
            <EditUserForm
              user={editingUser}
              onClose={() => setEditingUser(null)}
              onUpdate={(updatedUser) =>
                setUsers((prevUsers) =>
                  prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
                )
              }
            />
          )}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={() => setEditingUser(user)}
                onDelete={() => handleDelete(user.id)}
              />
            ))}
          </div>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="btn btn-secondary"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="btn btn-secondary"
            >
              Next
            </button>
          </div>
        </>
      )}
      {message && <p className={`text-${message.includes("success") ? "success" : "danger"} text-center`}>{message}</p>}
    </div>
  );
};

export default UsersList;