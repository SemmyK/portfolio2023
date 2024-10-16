import { Link, useNavigate } from 'react-router-dom'
//assets
import mern from '../assets/mernstack1.png'
import coding from '../assets/working.gif'
import pdf from '../pdf/CV2023.pdf'
//components
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
	const navigate = useNavigate()
	return (
		<Container
			fluid
			className='home-projects '
			style={{ marginTop: '7em' }}
		>
			<h2
				className='text-center display-6'
				style={{
					color: '#662d91',
					fontWeight: '400',
					fontStyle: 'italic',
				}}
			>
				All about me
			</h2>
			<p className='display-5  text-center'>
				Title: Junior Full-stack Developer
			</p>
			<article>
				<section className='learning'>
					<Container fluid>
						<Row className='justify-content-between'>
							<Col
								sm={10}
								md={5}
								className='text-right  img-col mx-auto'
							>
								<img
									src={mern}
									alt='profile'
									className='img-fluid'
								/>
							</Col>
							<Col
								sm={12}
								md={6}
								className='short-about text-dark mx-auto '
							>
								<Card.Body>
									<Card.Title className='display-6 my-3'>Learning</Card.Title>
									<Card.Text>
										<li>Started learning programming in 2020</li>
										<li>
											Used other sources to extend my knowledge - W3Schools,
											SoloLearn, freeCodeCamp, Udemy courses, YT videos and free
											courses online.
										</li>
										<li>
											Finished IT Academy JS Front-end Development program
										</li>
										<li>
											Finished Python Development program with IT Academy trying
											to become full-stack developer
										</li>
										<li>
											Finished Udemy The Complete 2023 Web Development Bootcamp
											Course by Angela Yu (App Brewery)
										</li>
										<li>
											Finished Udemy Build Web Apps with React & Firebase Course
											by The Net Ninja (Shaun Pelling)
										</li>
										<li>
											Finished Udemy React Front to Back Course by Brad Traversy
											(Traversy Media)
										</li>
										<li>
											Learned MERN stack with Udemy MERN Stack Course - MongoDb,
											Express, React and NodeJS by John Smilga (Coding addict)
										</li>

										<li>
											Learned NextJS, Typescript & TailwindCSS with several
											YouTube courses
										</li>
										<li>
											Learned Docker, Kubernetes, Redis, and Jest with Zero To
											Mastery course The Complete Junior to Senior Web Developer
											Roadmap
										</li>
										<li>Learning Typescript, Angular and MEAN stack.</li>
									</Card.Text>
									<Row
										className='mx-auto'
										style={{
											boxSizing: 'border-box',
											justifyContent: 'center',
											alignItems: 'center',
											display: 'flex',
											width: '80%',
										}}
									>
										<Col
											xs={8}
											md={6}
											className='mx-auto my-1'
										>
											<button
												onClick={() => navigate('/about/cv')}
												className='cv py-1 px-2'
												style={{
													textAlign: 'center',
													border: 'none',
													width: '100%',
												}}
											>
												See my CV
											</button>
										</Col>
										<Col
											xs={8}
											md={6}
											className='mx-auto my-1'
										>
											<a
												href={pdf}
												download
											>
												<button
													className='cv py-1 px-2'
													style={{
														textAlign: 'center',
														border: 'none',
														width: '100%',
													}}
												>
													Download my CV
												</button>
											</a>
										</Col>
									</Row>
								</Card.Body>
							</Col>
						</Row>
					</Container>
				</section>
				<section className='working'>
					<Container fluid>
						<Row
							className='justify-content-between'
							style={{ flexDirection: 'row-reverse' }}
						>
							<Col
								sm={10}
								md={5}
								className='text-right  img-col mx-auto'
							>
								<img
									src={coding}
									alt='profile'
									className='img-fluid'
								/>
							</Col>
							<Col
								sm={12}
								md={6}
								className='short-about text-dark mx-auto'
							>
								<Card.Body>
									<Card.Title className='display-6 my-3'>Experience</Card.Title>

									<Card.Text>
										<li>
											<b>2022</b> - Participated in Junior Programmer Mentorship
											Program by Scott Coates
											<br />
											Program for beginners with React, Redux, Firebase
											<br />
											<Link
												to='https://github.com/Scott-Coates-Org/group-project-team-red'
												className='project-link'
											>
												Project we build
											</Link>
										</li>
										<li>
											<b>July 2024 - Oktober 2024</b> - Participated in Klika
											Praksa Program
											<br />
											Internship program of 3 months. My role was Frontend
											Developer - using React, RTK Query, MUI for styling and
											Msal for login while building employees management app.
											<br />
										</li>
										<li>
											Continued learning and working on different personal
											projects
										</li>
									</Card.Text>
									<Link
										to='https://github.com/SemmyK?tab=repositories'
										className='project-link'
										style={{ textAlign: 'left' }}
									>
										See my projects on GitHub
									</Link>
								</Card.Body>
							</Col>
						</Row>
					</Container>
				</section>
			</article>
		</Container>
	)
}
export default About
