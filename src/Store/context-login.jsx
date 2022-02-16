import React, { useReducer } from "react";
import { validateUserName, validatPassword, validEmailRegex } from "../helpers/regex";

export const LoginContext = React.createContext()

const initialState = {
	userName : {
		user : '',
	    styleIsvalid : null
	},
	email : {
	    emailValue: '',
		styleIsvalid : null
	},
	password : {
		passwordValue : '',
	    styleIsvalid : null
	},
    errorMassage : '',
    loginData : []
}
const loginReducer = (state,action) =>{
	switch (action.type) {
		case 'USERNAME':
			return{
				...state,
				userName : {
					user : action.value,
					styleIsvalid :  validateUserName.test(action.value) ? true : null
				}
			}
		case 'INPUTUSERBLUR' :
			return{
				...state,
				userName : {
					user : state.userName.user,
					styleIsvalid :  validateUserName.test(state.userName.user) ? true : false,
				},
			}
		case  'EMAIL' : 
		    return{
				...state,
				email : {
					emailValue : action.value,
					styleIsvalid : validEmailRegex.test(action.value) ? true : null
				}
			}
		case 'INPUTEMAILBLUR' : 
			return{
				...state,
				email : {
					emailValue : state.email.emailValue,
					styleIsvalid : validEmailRegex.test(state.email.emailValue) ? true : false
				},

			}
		case 'PASSWORD' :
		const index12 =  action.value.split('', 2).join('')
		const valuePass = action.value.split('').reverse().join('')
		return {
			...state,
			password : {
				passwordValue : valuePass + index12,
				styleIsvalid : validatPassword.test(action.value) ? true : null 
			}
		}
		case 'PASSWORDBLUR' :
			return {
				...state,
				password : {
					passwordValue : state.password.passwordValue,
					styleIsvalid : validatPassword.test(state.password.passwordValue) ? true : false
				}
			}
        case 'LOGIN' :
            console.log(action)
            return {
                ...state,
                loginData : [...state.loginData,action.newData]
                
            }
	
		default: 
			return initialState;
	}
}



const LoginContextProvider = (props) => {
    const [state,dispatchLogin] = useReducer(loginReducer,initialState)
  return (
   <LoginContext.Provider value={{
       dispatchLogin,state
   }}>
       {console.log(state.loginData)}
      {props.children}
   </LoginContext.Provider>
  )
}

export default LoginContextProvider