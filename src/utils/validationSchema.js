import { z } from "zod";

export const validation = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .trim()
      .min(3, "Username must be at least 3 characters"),

    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(3, "Password minmum 3 characters long")
      .max(8, "maximum 8 letters "),

    DOB: z.string({
      required_error: "Username is required",
    }),
  })
  .required();
