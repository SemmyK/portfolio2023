import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { DataContextProvider } from './context/DataContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<DataContextProvider>
			<App />
		</DataContextProvider>
	</React.StrictMode>
)
