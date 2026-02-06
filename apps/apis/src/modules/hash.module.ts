import bcrypt from "bcryptjs";

export const hash_password = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const compare_password = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};
