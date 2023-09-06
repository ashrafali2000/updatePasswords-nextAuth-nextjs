import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;

    try {
      // Check if oldPassword matches the user's current password
      // const myUser = await getByEmail(userEmail);
      // if(!myUser){
      //   throw new Error("user does not exist");
      // }
      // const isValid = await verifyPassword(password, user.password);
      // if (!isValid) {
      //   throw new Error("incorrect password");
      // }
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
