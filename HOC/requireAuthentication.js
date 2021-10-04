import React from 'react'

const RequireAuthentication = () => {
    export const GetServerSideProps = (context) =>{
        const {req, res} = context;
        const Token = getUserToken(req.headers.cookie)
        
        if (!token) {
            // Redirect to login page
            return {
                redirect: {
                    destination: '/about',
                    statusCode: 302
                }
            };
        }

    }  
 
    return await GetServerSideProps(context); // Continue on to call `getServerSideProps` logic
   
}

export default RequireAuthentication
