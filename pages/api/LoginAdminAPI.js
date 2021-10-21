import axios from "axios";
import React from "react";
import coookie from "cookie";

const LoginAdminAPI = (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/authadmin/login`,
        (email, password)
      )
      .then((res) => {
        const result = res.data.data;
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", result.token, {
            httpOnlu: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          })
          );
          res.status(200)
          res.json({data:result})
      });
  }
};

export default LoginAdminAPI;
