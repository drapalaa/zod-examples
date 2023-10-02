import { useAsync } from "react-use";
import { usersApi } from "../api";

export const User = () => {
  const { value: user, loading, error } = useAsync(usersApi.getUser, []);

  return (
    <div>
      {loading && "loading user..."}
      {error && <pre style={{ color: "red" }}>Error: {error.message}</pre>}
      {user && (
        <>
          <p>username: {user.username}</p>
          <p>isAdmin: {user.role === 'ADMIN' ? 'Yes' : 'No'}</p>
          <p>theme: {user.theme.type}</p>
        </>
      )}
    </div>
  );
};
