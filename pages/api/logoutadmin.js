import cookie from "cookie";
const Logoutadmin = (req, res) => {
  try {
    if (req.method === "POST") {
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.setHeader(
        "Set-Cookie",
        [cookie.serialize("token", '', {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: -1,
          path: "/", 
        }),
        cookie.serialize("user_isAuth", '', {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: -1,
          path: "/",
        }),  
          cookie.serialize("user_idAdmin", '', {
             httpOnly: true,
             secure: true,
             sameSite: "strict",
             maxAge: -1,
             path: "/",
           }),       
        ])
      res.status(200)
      res.json({message:'logout success'})
    }
  } catch (error) {
    console.log(error);
    res.status(500)
    res.json({data: null, error: "error logout"})
  }
 
}

export default Logoutadmin
