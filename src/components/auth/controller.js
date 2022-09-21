import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

export const signup = async (req, res) => {
  try {
    const { email, password, name, phone_number } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    const oldUser = await prisma.user.findUnique({ 
      where: {
        email: email
      }
     });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    let encryptedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data:{
        name,
        phone_number,
        email: email.toLowerCase(),
        password: encryptedPassword,
      }
      
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "10h",
      }
    );
    user.token = token;
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await prisma.user.findUnique({ 
      where: {
        email: email
      }
     });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};