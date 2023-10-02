const themes = ["light", "dark"] as const;

type Theme = (typeof themes)[number];

type User = {
  username: string;
  role: string;
  theme: Theme;
};

class UsersApi {
  async getUser(): Promise<User> {
    const response = await fetch("/user");

    if (response.ok) {
      return await response.json();
    }

    throw new Error("Cannot get get user data");
  }
}

export const usersApi = new UsersApi();
