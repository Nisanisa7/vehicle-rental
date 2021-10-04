import React from 'react'
import { Types } from '../types'

const initialState = {
    profile: {},
    error: null
  };
export const AdminReducer = (state = initialState, action) => {
   switch (action.type){
       case Types.ADMIN_LOGIN:
           return{
                profile: action.payload
           }
   }
}
