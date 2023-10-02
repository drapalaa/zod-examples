import { z } from "zod";

const themes = ["light", "dark"] as const;

// const userSchema = z.object({
//   username: z.string(),
//   createdAt: z.string(),
//   roles: z.string().array(),
//   theme: z.enum(themes).default("light"),
// });

const userSchema = z
  .object({
    username: z.string(),
    roles: z.string().array(),
    theme: z.enum(themes).default("light"),
  })
  .transform(({ roles, ...rest }) => ({
    ...rest,
    roles,
    isAdmin: roles.includes("ADMIN"),
  }));

// type User = z.infer<typeof userSchema>;

type UserResponse = z.input<typeof userSchema>;

type User = z.output<typeof userSchema>;

class UsersApi {
  async getUser(): Promise<User> {
    const response = await fetch("/user");

    if (response.ok) {
      const user = await response.json();

      return userSchema.parse(user);
    }

    throw new Error("Cannot get get user data");
  }
}

export const usersApiwithZod = new UsersApi();
