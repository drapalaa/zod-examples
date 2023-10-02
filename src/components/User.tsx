import { useAsync } from "react-use";
import { usersApi } from "../api";

export const User = () => {
  const { value: user, loading, error } = useAsync(usersApi.getUser, []);

  return (
    <div>
      <h1>Without ZOD</h1>
      {loading && "loading user..."}
      {error && <pre style={{ color: "red" }}>Error: {error.message}</pre>}
      {user && (
        <>
          <p>username: {user.username}</p>
          <p>roles: {user.roles.join(", ")}</p>
          <p>theme: {user.theme}</p>
        </>
      )}
    </div>
  );
};
