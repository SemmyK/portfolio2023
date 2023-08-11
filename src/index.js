import React from 'react'
import ReactDOM from 'react-dom/client'
//style
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
//context
import { DataContextProvider } from './context/DataContext'
//components
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<DataContextProvider>
			<App />
		</DataContextProvider>
	</React.StrictMode>
)
