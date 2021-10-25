
const Logoutadmin = (req, res) => {
  if (req.method === "GET") {
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
}

export default Logoutadmin
