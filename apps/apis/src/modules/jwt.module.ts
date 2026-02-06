import jwt from "jsonwebtoken";

export const generate_JWT_Token = (token: any) => {
  const info = jwt.sign(token, "secret", {
    expiresIn: "7d",
  });
  return info;
};

export const verify_jwt_token = (payload: any) => {
  return new Promise((resolve, reject) => {
    jwt.verify(payload, "secret", (err: any, decode: any) => {
      if (err) {
        reject(err);
      }
      if (decode) {
        resolve(decode);
      }
    });
  });
};
