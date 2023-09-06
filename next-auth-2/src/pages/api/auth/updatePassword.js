import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;

    try {
      const myUser = getByEmail(userEmail);
      const userVerifyPassword = await verifyUserPassword(oldPassword, myUser.password);
     
      const user =  await updateUserPassword(userEmail, newPassword);
       res.status(201).json(user);

      res.status(200).json(userVerifyPassword);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
  } 
}
