import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<SignIn />} />
        <Route  path='/home' element={<Home/>}/>
			</Routes>
		</div>
	)
}

export default App
