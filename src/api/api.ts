const themes = ["light", "dark"] as const;

type Theme = (typeof themes)[number];

type User = {
  username: string;
  createdAt: string;
  roles: string[];
  theme: Theme;
};

class UsersApi {
  async getUser(): Promise<User> {
    const response = await fetch("/user");

    if (response.ok) {
      const user = await response.json();

      return user;
    }

    throw new Error("Cannot get get user data");
  }
}

export const usersApi = new UsersApi();
