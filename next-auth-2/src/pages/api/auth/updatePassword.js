import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;

    try {
      const passwordMatches = await verifyUserPassword(userEmail, oldPassword);
      if (!passwordMatches) {
         res.status(401).json({ error: "Invalid password" });
      }
      // Update the user's password
    const user =  await updateUserPassword(userEmail, newPassword);
     res.status(201).json(user);

    } catch (error) {
       res.status(500).json({ error: "Password update failed" });
    }
  } 
}
