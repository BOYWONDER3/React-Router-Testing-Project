import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users.js";

function UserList() {
  const users = useLoaderData();
  return (
    <>
      <h1 class="page-title">Users</h1>
      <div class="card-grid">
        {users.map((user) => (
          <div key={user.id} class="card">
            <div class="card-header">{user.name}</div>
            <div class="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div class="card-footer">
              <Link class="btn" to={user.id.toString()}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
