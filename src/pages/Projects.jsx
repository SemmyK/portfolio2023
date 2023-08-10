import { useDataContext } from '../hooks/useDataContext'
import { Link } from 'react-router-dom'
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'

function Projects() {
	const { allData, loading } = useDataContext()

	if (loading) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SyncLoader />
			</div>
		)
	}

	return (
		allData && (
			<Container fluid className='home-projects ' style={{ marginTop: '7em' }}>
				<h2
					className='text-center display-6'
					style={{ color: '#662d91', fontWeight: '400' }}
				>
					See all my projects
				</h2>
				<CardGroup className='d-flex cards'>
					<Row className='justify-content-around mx-0'>
						{allData.length !== 0 &&
							allData.map(project => (
								<Col xs={10} md={5} lg={4} key={project.id} className='my-2'>
									<Card border='light' className='single-card'>
										<Card.Header className='lead text-center'>
											{project.used.map(item => (
												<span key={item}>{item}</span>
											))}
										</Card.Header>
										<Card.Body>
											<Card.Title className='text-center project-title'>
												{project.name}
											</Card.Title>
											<Link
												to={`/projects/:${project.id}`}
												style={{ display: 'inline-block', height: '11em' }}
											>
												<Card.Img
													variant='center'
													src={project.image}
													className='card-imgs d-block mx-auto img-fluid'
												></Card.Img>
											</Link>

											<Card.Text className='mt-4 text-center'>
												{project.desc}
											</Card.Text>
										</Card.Body>
										<Link
											to={`/projects/:${project.id}`}
											className='project-link'
										>
											See more...
										</Link>
									</Card>
								</Col>
							))}
					</Row>
				</CardGroup>
			</Container>
		)
	)
}
export default Projects
