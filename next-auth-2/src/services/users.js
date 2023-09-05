import fs from "fs";
import path from "path";
import bcrypt from "bcrypt"

const filePathUsers = path.join(process.cwd(), "src", "database", "users.json");

// user getALlUsers function
export const getALlUsers = () => {
    const {users} = fs.readFileSync(filePathUsers);
    return JSON.parse(users);
}

// check getByEmail function
export const getByEmail = (email) => {
    const {users} = getALlUsers();
    return users.find(user => user.email === email)
}

// Varify password function
export const verifyPassword = async (password, hashPassword) => {
    const isValid = await bcrypt.compare(password, hashPassword)
   return isValid;
}

// create user function
export const createUser = async(email, password) => {
    const {users} = getALlUsers();
    const found = getByEmail(email);
     if(found) {
        throw new Error ("user already exist");
     }
    const hashPassword = await bcrypt.hash(password , 12);
    users.push({id: users.length + 1, email, password : hashPassword});
    fs.writeFileSync(filePathUsers, JSON.stringify(users));
    return users;
   
}

// Updata password Functions
export async function verifyUserPassword(userEmail, oldPassword) {
    const found = getByEmail(userEmail);
    if (found) {
      const isValid = await bcrypt.compare(oldPassword, found.password);
      return isValid;
    }
  }
  
  export async function updateUserPassword(userEmail, newPassword) {
    let { users } = getALlUsers();
    const found = getByEmail(userEmail);
    const hashPassword = await bcrypt.hash(newPassword, 12);
    let val = false;
    for (let a = 0; a < users.length; a++) {
      if (users[a].email === found.email) {
        users[a].password = hashPassword;
        val = true;
        break;
      }
    }
    if (val) {
      fs.writeFileSync(filePathUsers, JSON.stringify({ users }));
    }
  }
  