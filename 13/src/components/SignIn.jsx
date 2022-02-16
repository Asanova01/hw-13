import React, { useEffect, useReducer, useState } from 'react'
import './Login.css'
import Input from './UI/Input';
import Button from './UI/Button';
import Card from './UI/Card';
import { validateUserName } from '../helpers/regex';
import { validatPassword } from '../helpers/regex';
import { validEmailRegex } from '../helpers/regex';

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
	}
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
					styleIsvalid :  validateUserName.test(state.userName.user) ? true : false
				}
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
				}
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
	
		default: 
			return initialState;
	}
}

const Login = () => {
	const [state,dispatchLogin] = useReducer(loginReducer,initialState)
	const [validateForm,setValidateForm] = useState(false)

	useEffect(()=>{
		console.log('valid');
		setValidateForm(state.userName.styleIsvalid && state.email.styleIsvalid && state.password.styleIsvalid)
	},[state.userName.styleIsvalid, state.email.styleIsvalid ,state.password.styleIsvalid])

	const userNameChangeHandler = (e) => dispatchLogin({type : 'USERNAME',value:e.target.value})

	const validateUserNameHandler = () =>dispatchLogin({type : 'INPUTUSERBLUR'})
	
	const emailChangeHnahdler = (e) =>dispatchLogin({type : 'EMAIL',value:e.target.value})

	const validateEmailHandler = () =>dispatchLogin({type : 'INPUTEMAILBLUR'})
	
	const passwordChangeHandler = (e) =>dispatchLogin({type : 'PASSWORD',value:e.target.value})
	
	const validatePasswordHandler = () =>dispatchLogin({type : 'PASSWORDBLUR'})
	return (	
			<Card>
				<div className="info">
                    <h2>Mission to Deep Space</h2>
                    <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                    <p>The Future Is Here</p>
                </div>
				<form className='signupForm'>
					<h2>Sign Up</h2>
					<ul className='noBullet'>
						<li className={`liUser ${state.userName.styleIsvalid === false ? 'invalid' : ''}`}>
							<label htmlFor='username'></label>
							<Input
							    onChange={userNameChangeHandler}
								type='text'
								placeholder='Username'
								onBlur={validateUserNameHandler}
							/>
							{state.userName.styleIsvalid && <p className='p'>User name valid</p>}
							{state.userName.styleIsvalid === false && <p className='p'>User name invalid</p> }
						</li>
						<li className={`liPassword ${state.password.styleIsvalid === false ? 'invalid' : ''}`}>
							<label htmlFor='password'></label>
							<Input
								type='password'
								placeholder='Password'
								onChange={passwordChangeHandler}
								onBlur={validatePasswordHandler}
							/>
							{state.password.styleIsvalid && <p className='p'>password valid</p>}
							{state.password.styleIsvalid === false && <p className='p'>password invalid</p> }
						</li>
						<li className={`liEmail ${state.email.styleIsvalid === false ? 'invalid' : ''}`}>
							<label htmlFor='email'></label>
							<Input
								type='email'
								placeholder='Email'
								onChange={emailChangeHnahdler}
								onBlur = {validateEmailHandler}
							/>
							{state.email.styleIsvalid && <p className='p'>Email name valid</p>}
							{state.email.styleIsvalid === false && <p className='p'>Email invalid</p> }
						</li>
						<li id='center-btn'>
							<Button
								type='submit'
								disabled = {!validateForm}
							>login</Button>
						</li>
					</ul>
				</form>
			</Card>
	)
}

export default Login
