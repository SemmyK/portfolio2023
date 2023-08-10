import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ByeMsg from './components/ByeMsg'
import PdfModal from './components/PdfModal'

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/about/cv' element={<PdfModal />} />
						<Route path='/projects' element={<Projects />} />
					</Routes>
					<ByeMsg />
				</main>
				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	)
}

export default App
