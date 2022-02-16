import React, { useReducer } from "react";
import { validateUserName, validatPassword, validEmailRegex } from "../helpers/regex";

export const LoginContext = React.createContext()

const initialState = {
	userName : {
		user : '',
	    styleIsvalid : null,
		errorMassage : '',
	},
	email : {
	    emailValue: '',
		styleIsvalid :null,
		errorMassage : '',
	},
	password : {
		passwordValue : '',
	    styleIsvalid : null,
		errorMassage : '',
	},
    loginData : []
}
const loginReducer = (state,action) =>{
	switch (action.type) {
		case 'USERNAME':
			return{
				...state,
				userName : {
					user : action.value,
					styleIsvalid :  validateUserName.test(action.value) &&  true
				}
			}
		case 'INPUTUSERBLUR' :
			return{
				...state,
				userName : {
					...state.userName,
					user : state.userName.user,
					errorMassage :  validateUserName.test(state.userName.user) ? '' : ( state.userName.user === "") ? 'напишите login' : 'некорректный login',
				},
			}
		case  'EMAIL' : 
		    return{
				...state,
				email : {
					emailValue : action.value,
					styleIsvalid : validEmailRegex.test(action.value) && true
				}
			}
		case 'INPUTEMAILBLUR' : 
			return{
				...state,
				email : {
					...state.email,
					emailValue : state.email.emailValue,
					errorMassage : validEmailRegex.test(state.email.emailValue) ? '' : ( state.email.emailValue === "") ? 'напишите email' : 'некорректный email'

				},

			}
		case 'PASSWORD' :
		const index12 =  action.value.split('', 2).join('')
		const valuePass = action.value.split('').reverse().join('')
		return {
			...state,
			password : {
				passwordValue : valuePass + index12,
				styleIsvalid : validatPassword.test(action.value) && true
			}
		}
		case 'PASSWORDBLUR' :
			return {
				...state,
				password : {
					...state.password,
					passwordValue : state.password.passwordValue,
					errorMassage : validatPassword.test(state.password.passwordValue) ? '' : ( state.password.passwordValue === "") ? 'напишите пароль' : 'не надежный пароль'
				}
			}
        case 'LOGIN' :
            console.log(action)
            return {
                ...state,
                loginData : [...state.loginData,action.newData]
                
            }
	    case  'CLEAR' : 
		return initialState
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