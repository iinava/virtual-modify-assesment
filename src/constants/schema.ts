import { z } from "zod";

export const validationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    age: z
      .number({ invalid_type_error: "Age must be a number" })
      .positive("Age must be a positive number")
      .int("Age must be an integer"),
    email: z.string().email("Invalid email format").min(1, { message: "Email is required" }),
    phone: z
      .string()
    //   .regex(/^[\d()+-]+$/, "Phone number must contain only digits")
      .min(1, { message: "Phone number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
  });
  