
const Logoutadmin = (req, res) => {
  try {
    if (req.method === "POST") {
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.setHeader('Set-Cookie', [
        serialize('token', '', {
          maxAge: -1,
          path: '/',
        }),
        serialize('user_isAuth', '', {
          maxAge: -1,
          path: '/',
        }),
        serialize('user_idAdmin', '', {
          maxAge: -1,
          path: '/',
        }),
      ]);
      res.status(200)
      res.json({message:'logout success'})
    }
  } catch (error) {
    res.status(error.response.status)
    res.json({data: null, error: {message: error.response}})
  }
 
}

export default Logoutadmin
