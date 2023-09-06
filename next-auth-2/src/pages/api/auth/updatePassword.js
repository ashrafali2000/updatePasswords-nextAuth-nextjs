import { verifyUserPassword, updateUserPassword } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;

    try {
      // Check if oldPassword matches the user's current password
      const passwordMatches = await verifyUserPassword(userEmail, oldPassword);

      if (!passwordMatches) {
        return res.status(401).json({ error: "Invalid password" });
      }
      // Update the user's password
      await updateUserPassword(userEmail, newPassword);

      return res.status(201).json({ message: "Password updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Password update failed" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
