import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({
  name,
  email,
  password,
  description,
}: User) => {
  const userExists = await UserModel.findOne({ email });

  if (userExists) return "USER_ALREADY_EXISTS";

  const passwordHash = await encryptPassword(password);
  const res = await UserModel.create({
    name,
    email,
    password: passwordHash,
    description,
  });

  return res;
};

const loginUser = async ({email, password}: Auth) => {
  const userExists = await UserModel.findOne({email});

  // Es recomendable no especificar si el usuario esta o no en la BD.
  if (!userExists) return "USER_OR_PASSWORD_INCORRECT";

  const passwordHash = userExists.password;
  const isPasswordCorrect = await verifyPassword(password, passwordHash);

  if (!isPasswordCorrect) return "USER_OR_PASSWORD_INCORRECT";

  const token = await generateToken(userExists.id);

  const res = {
    token,
    user: userExists,
  };

  return res;
};

export { registerNewUser, loginUser };
