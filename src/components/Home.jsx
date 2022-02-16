import React, { useContext } from 'react'
import { LoginContext } from '../Store/context-login'
import Card from './UI/Card'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const { state,dispatchLogin } = useContext(LoginContext)
	console.log(state.loginData)
	const navigate = useNavigate()

  const logoutHandler = () =>{
    navigate('/')
    dispatchLogin({type: 'CLEAR'})
  }
	return (
		<div className='bg'>
			<div className='container'>
				<header>
					<h2 class='logo'>React</h2>
					<ul className='ul'>
						<li class='item'>Home</li>
						<li class='item'>Features</li>
						<li class='item'>Testimonial</li>
						<li class='item'>Blog</li>
					</ul>
					<button
						onClick={logoutHandler}
						class='download'
					>
						Logout
					</button>
				</header>
				<div className='home'>
					<strong>Welcom</strong> <br />
					{state.loginData.map((el) => (
						<h1 key={el.id}>{el.userName}</h1>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
