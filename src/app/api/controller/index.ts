import { NextApiRequest, NextApiResponse } from "next";
import { createUser, gettAllUsers, deleteUser } from "@/app/api/user/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        // Handle GET request logic
        const users = await gettAllUsers();
        return res.status(200).json(users);
      }

      case "POST": {
        // Handle POST request logic
        const {
          fullName = "",
          email = "",
          username = "",
          password = "",
          confirmPassword = "",
        } = req.body;
        const new_user = await createUser(
          fullName,
          email,
          username,
          password,
          confirmPassword
        );
        return res.status(201).json(new_user);
      }

      case "DELETE": {
        // Handle DELETE request logic
        const id: string | undefined = req.query.id as string | undefined;

        if (id === undefined) {
          return res
            .status(400)
            .json({ message: "Invalid or missing user ID" });
        }

        // Call your deleteUser function with id
        await deleteUser(id);

        return res.status(204).json({ message: "User deleted" });
      }

      default:
        res.status(405).end(`Method ${req.method} Not Allowed`); // Return 405 Method Not Allowed for unsupported methods
    }
  } catch (error) {
    console.error(error);
    res.status(500).end("Internal Server Error"); // Return 500 Internal Server Error for server-side errors
  }
}
