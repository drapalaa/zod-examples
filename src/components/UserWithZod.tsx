import { useAsync } from "react-use";
import { usersApiwithZod } from "../api";

export const UserWithZod = () => {
  const { value: user, loading, error } = useAsync(usersApiwithZod.getUser, []);
  console.log(user);

  return (
    <div>
      <h1>ZOD</h1>
      {loading && "loading user..."}
      {error && <pre style={{ color: "red" }}>Error: {error.message}</pre>}
      {user && (
        <>
          <p>username: {user.username}</p>
          <p>roles: {user.roles.join(", ")}</p>
          <p>theme: {user.theme}</p>
          <p>isAdmin: {user.isAdmin ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
};
