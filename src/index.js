import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LoginContextProvider from './Store/context-login'

ReactDOM.render(
	<LoginContextProvider>
		<App />
	</LoginContextProvider>,

	document.getElementById('root'),
)
