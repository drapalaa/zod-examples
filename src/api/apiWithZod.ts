import { z } from "zod";

const themes = ["light", "dark"] as const;

const userSchema = z.object({
  username: z.string(),
  role: z.string(),
  theme: z.object({
    type: z.enum(themes)
  })
});

type User = z.infer<typeof userSchema>;

class UsersApi {
  async getUser(): Promise<User> {
    const response = await fetch("/user");

    if (response.ok) {
      const user = await response.json();

      return userSchema.parse(user);
    }

    throw new Error("Getting user details failed.");
  }
}

export const usersApiWithZod = new UsersApi();
