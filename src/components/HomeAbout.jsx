import { Link } from 'react-router-dom'
//assets
import Image from '../assets/profile1.jpg'
//components
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function HomeAbout() {
	return (
		<Container
			fluid
			className='home-about mt-4'
		>
			<Row className='justify-content-between mx-auto'>
				<Col
					sm={10}
					md={5}
					className='text-right  img-col mx-auto'
				>
					<img
						src={Image}
						alt='profile'
						className='img-fluid'
					/>
				</Col>
				<Col
					sm={12}
					md={6}
					className='short-about text-dark mx-auto justify-self-center align-self-center'
				>
					<Card.Body>
						<Card.Title
							className='display-6'
							style={{ fontWeight: '500' }}
						>
							Full-stack Developer
						</Card.Title>
						<Card.Subtitle
							className='mb-4 lead'
							style={{ height: 'fit-content' }}
						>
							Little Something About Me
						</Card.Subtitle>
						<Card.Text>
							<li>Started learning programming in 2020</li>
							<li>
								Used other sources to extend my knowledge - W3Schools,
								SoloLearn, freeCodeCamp, Udemy courses, YT videos and free
								courses online.
							</li>
							<li>Finished IT Academy JS Front-end Development program</li>
							<li>
								Finished Python Development program with IT Academy trying to
								become full-stack developer
							</li>
							<li>Learned MERN stack</li>
							<li>Learned NextJS, Typescript & TailwindCSS</li>
							<li>Learning Docker, Kubernetes, Redis, and Jest</li>
						</Card.Text>
						<Link
							to='/about'
							className='project-link'
							style={{ textAlign: 'left' }}
						>
							See more ...
						</Link>
					</Card.Body>
				</Col>
			</Row>
		</Container>
	)
}
