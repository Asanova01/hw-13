import React, { useContext, useEffect, useReducer, useState } from 'react'
import './Login.css'
import Input from './UI/Input';
import Button from './UI/Button';
import Card from './UI/Card';
import { LoginContext } from '../Store/context-login';

const Login = () => {
	const [validateForm,setValidateForm] = useState(false)
	const {dispatchLogin,state} = useContext(LoginContext)

	useEffect(()=>{
		console.log('valid');
		setValidateForm(state.userName.styleIsvalid && state.email.styleIsvalid && state.password.styleIsvalid)
	},[state.userName.styleIsvalid, state.email.styleIsvalid ,state.password.styleIsvalid])

	const userNameChangeHandler = (e) => dispatchLogin({type : 'USERNAME',value:e.target.value})

	const validateUserNameHandler = () =>{
		// dispatchLogin({type : 'INPUTUSERBLUR'})
		// if(state.userName.styleIsvalid)
	}
	const emailChangeHnahdler = (e) =>dispatchLogin({type : 'EMAIL',value:e.target.value})

	const validateEmailHandler = () =>dispatchLogin({type : 'INPUTEMAILBLUR'})
	
	const passwordChangeHandler = (e) =>dispatchLogin({type : 'PASSWORD',value:e.target.value})
	
	const validatePasswordHandler = () =>dispatchLogin({type : 'PASSWORDBLUR'})

	const submitHandler = (e) => {
		e.preventDefault()
		const newData = {
			userName : state.userName.user,
			email : state.email.emailValue,
			password : state.password.passwordValue,
			id : Math.random().toString()
		}
		dispatchLogin({type : 'LOGIN',newData})
	}
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
							{state.email.styleIsvalid === false && <p className='p'>Email invalid</p> }
							<p className='p'>{state.errorMassage}</p>
							{console.log(state)}
						</li>
						<li id='center-btn'>
							<Button
							    onClick = {submitHandler}
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
