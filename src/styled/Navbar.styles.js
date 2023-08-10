import styled from 'styled-components'

export const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	width: 90%;
	padding: 0;
	margin: 0 auto;
	text-align: center;
	z-index: 1000;

	a {
		display: inline-block;
		text-decoration: none;
		color: #fff;
		text-align: center;
		padding: 0.3em 1em;
	}
	a:hover {
		transform: scale(0.9);
	}
	a.active {
		background: #513593;
		color: #fff;
		border-radius: 4px;
	}

	.navbar {
		background: linear-gradient(
			180deg,
			#513593,
			#662d91 20%,
			#e5c7df
		) !important;
		box-shadow: 0 8px 6px -6px #513593 !important;
		padding: 0 1em;
		font-size: 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.hamburger-menu {
		padding: 0;
		border-radius: 4px;
	}

	.hamburger-menu button {
		padding: 0;
		width: 2.3em;
		height: 2.3em;
		border-radius: 4px;
		border: 1px solid #fff;
	}

	.hamburger-menu .navbar-toggler:focus {
		box-shadow: 3px 3px 3px #fff, -3px -3px 3px #fff !important;
	}

	.hamburger-menu span {
		width: 30px;
		height: 30px;
	}

	.offcanvas .show {
		background-color: linear-gradient(
			180deg,
			#513593,
			#662d91 20%,
			#e5c7df
		) !important;
		color: #fff !important;
	}

	.offcanvas-header button {
		width: 2.5em;
		height: 2.5em;
		background-size: 2em;
	}

	.offcanvas-header .btn-close:focus {
		box-shadow: 3px 3px 3px #fff, -3px -3px 3px #fff !important;
	}
`
