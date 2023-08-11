import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SingleProject from './pages/SingleProject'
//components
import Footer from './components/Footer'
import NavBar from './components/Navbar'
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
						<Route path='/projects/:id' element={<SingleProject />} />
					</Routes>
					<ByeMsg />
				</main>
				<footer style={{ marginBottom: '0px', paddingBottom: '0px' }}>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	)
}

export default App
