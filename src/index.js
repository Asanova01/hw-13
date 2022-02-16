import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LoginContextProvider from './Store/context-login'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<LoginContextProvider>
			<App />
		</LoginContextProvider>
	</BrowserRouter>,

	document.getElementById('root'),
)
