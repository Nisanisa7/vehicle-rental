import cookies from 'next-cookies'


export  function PublicRoute(getServerSideProps) {
    return async(ctx) =>{
        const req = ctx
        const isAuth = cookies(req).user_isAuth
        const role = cookies(req).user_role
        if(isAuth === "true" && role === "custommer"){
            return {
                redirect: {
                  permanent: false,
                  destination: `/home`,
                },
            }
        } else if(isAuth === "true" && role === "admin"){
            return {
                redirect: {
                  permanent: false,
                  destination: `/adminPage/homeAfterLogin`,
                },
            }
        }
        return await getServerSideProps(ctx)
    }
}
