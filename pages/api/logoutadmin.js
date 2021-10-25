
const Logoutadmin = (req, res) => {
    try {
        res.clearCookie('token')
        res.clearCookie('user_idAdmin')
        res.clearCookie('user_role')
        res.clearCookie('user_idAdmin')
    
        res.status(200);
        res.json({
          message: 'Success logout'
        });
      } catch (error) {
        console.log(error)
        next(new Error(error.message))
      }
}

export default Logoutadmin
