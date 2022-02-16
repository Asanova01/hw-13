import React, { useContext, useEffect, useReducer, useState } from 'react'
import './Login.css'
import Input from './UI/Input'
import Button from './UI/Button'
import Card from './UI/Card'
import { LoginContext } from '../Store/context-login'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [validateForm, setValidateForm] = useState(false)
	const { dispatchLogin, state } = useContext(LoginContext)
	const navigate = useNavigate()

	useEffect(() => {
		console.log('valid')
		setValidateForm(
			state.userName.styleIsvalid &&
				state.email.styleIsvalid &&
				state.password.styleIsvalid,
		)
	}, [
		state.userName.styleIsvalid,
		state.email.styleIsvalid,
		state.password.styleIsvalid,
	])

	const userNameChangeHandler = (e) =>
		dispatchLogin({ type: 'USERNAME', value: e.target.value })

	const validateUserNameHandler = () => {
		dispatchLogin({ type: 'INPUTUSERBLUR' })
	}

	const emailChangeHnahdler = (e) => {
		dispatchLogin({ type: 'EMAIL', value: e.target.value })
	}

	const validateEmailHandler = () => dispatchLogin({ type: 'INPUTEMAILBLUR' })

	const passwordChangeHandler = (e) =>
		dispatchLogin({ type: 'PASSWORD', value: e.target.value })

	const validatePasswordHandler = () =>
		dispatchLogin({ type: 'PASSWORDBLUR' })

	const submitHandler = (e) => {
		e.preventDefault()
		const newData = {
			userName: state.userName.user,
			email: state.email.emailValue,
			password: state.password.passwordValue,
			id: Math.random().toString(),
		}
		dispatchLogin({ type: 'LOGIN', newData })
		return navigate('/home')
	}
	return (
		<Card>
			<div className='info'>
				<h2>Mission to Deep Space</h2>
				<i
					className='icon ion-ios-ionic-outline'
					aria-hidden='true'
				></i>
				<p>The Future Is Here</p>
			</div>
			<form className='signupForm'>
				<h2>Sign Up</h2>
				<ul className='noBullet'>
					<li
						className={`liUser ${
							state.userName.errorMassage ? 'invalid' : ''
						}`}
					>
						<label htmlFor='username'></label>
						<Input
							onChange={userNameChangeHandler}
							type='text'
							placeholder='Username'
							onBlur={validateUserNameHandler}
						/>
						<p className='p'>{state.userName.errorMassage}</p>
					</li>
					<li
						className={`liPassword ${
							state.password.errorMassage ? 'invalid' : ''
						}`}
					>
						<label htmlFor='password'></label>
						<Input
							type='password'
							placeholder='Password'
							onChange={passwordChangeHandler}
							onBlur={validatePasswordHandler}
						/>
						<p className='p'>{state.password.errorMassage}</p>
					</li>
					<li
						className={`liEmail ${
							state.email.errorMassage ? 'invalid' : ''
						}`}
					>
						<label htmlFor='email'></label>
						<Input
							type='email'
							placeholder='Email'
							onChange={emailChangeHnahdler}
							onBlur={validateEmailHandler}
						/>
						<p className='p'>{state.email.errorMassage}</p>
						{console.log(state)}
					</li>
					<li id='center-btn'>
						<Button
							onClick={submitHandler}
							type='submit'
							disabled={!validateForm}
						>
							login
						</Button>
					</li>
				</ul>
			</form>
		</Card>
	)
}

export default Login
