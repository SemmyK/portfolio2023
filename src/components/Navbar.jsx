import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//assets
import logo from '../assets/My-logo-big.png'
//style: bootstrap & styled components
import { Nav, NavItem, NavbarBrand, Navbar, Offcanvas } from 'react-bootstrap'
import { StyledNavbar } from '../styled/Navbar.styles'

function NavBar() {
	const [screen, setScreen] = useState(window.innerWidth)

	useEffect(() => {
		const updateScreen = () => setScreen(window.innerWidth)
		window.addEventListener('resize', updateScreen)

		return () => window.removeEventListener('resize', updateScreen)
	}, [])

	return (
		<StyledNavbar>
			<Navbar
				expand='md'
				fixed='top'
				className=' justify-content-between bg-transparent'
			>
				<NavbarBrand className='logo nav-item '>
					<Link
						to='/'
						className='nav-link'
					>
						<img
							src={logo}
							alt='logo'
							width={screen > '760' ? '150px' : '130px'}
						/>
					</Link>
				</NavbarBrand>
				{screen > '760' && (
					<Nav expand='lg'>
						<NavItem className='nav-item  '>
							<NavLink
								to='/'
								className=' text-center'
							>
								Home
							</NavLink>
						</NavItem>
						<NavItem className='nav-item '>
							<NavLink
								to='about'
								className=' text-center'
							>
								About
							</NavLink>
						</NavItem>
						<NavItem className='nav-item '>
							<NavLink
								to='projects'
								className=' text-center'
							>
								Projects
							</NavLink>
						</NavItem>
					</Nav>
				)}

				{/* hamburger menu */}
				{screen <= '760' && (
					<Navbar
						expand='md'
						className=' hamburger-menu'
					>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-md`}
							aria-labelledby={`offcanvasNavbarLabel-expand-md`}
							placement='end'
							style={{
								width: '200px',
								color: '#fff',
								background:
									'linear-gradient(180deg,#513593,#662d91 20%,	#e5c7df)',
							}}
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
									{/* <Link to="/">
										<img src={LogoNoName} alt="logo" width="90px" />
									</Link> */}
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className='justify-content-end flex-grow-1 pe-3'>
									<Nav.Link href='/'>Home</Nav.Link>
									<Nav.Link href='about'>About</Nav.Link>
									<Nav.Link href='projects'>Projects</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Navbar>
				)}
			</Navbar>
		</StyledNavbar>
	)
}
export default NavBar
