import cookies from 'next-cookies'

export function PrivateRoute(getServerSideProps) {
    return async (ctx) =>{
        const req = ctx
        const isAuth = cookies(req).user_isAuth
        if(isAuth !== 'true'){
            return{
                redirect: {
                    permanent: false,
                    destination:'/auth_user'
                }
            }
        }
        return await getServerSideProps(ctx)
    }
}
