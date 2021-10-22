import axios from "axios";
import cookie from "cookie";

const AdminLogin = (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/authadmin/login`,
        (email, password)
      )
      .then((response) => {
        const result = response.data.data;
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", result.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          }));
          res.status(200)
          res.json({data:result})
      })
  }
};

export default AdminLogin;
