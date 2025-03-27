import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="card-img-top rounded-circle mx-auto mt-3"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
          <p className="card-text">{user.email}</p>
          <div className="d-flex justify-content-center gap-2">
            <button onClick={onEdit} className="btn btn-sm btn-primary">
              Edit
            </button>
            <button onClick={onDelete} className="btn btn-sm btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;