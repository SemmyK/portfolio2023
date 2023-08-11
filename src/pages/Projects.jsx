import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//hooks
import { useDataContext } from '../hooks/useDataContext'
//components
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'

function Projects() {
	const isMounted = useRef(true)
	const { allData, loading } = useDataContext()
	const [allProjects, setAllProjects] = useState(null)

	useEffect(() => {
		if (isMounted) {
			allData && setAllProjects(allData)
		}
		return () => (isMounted.current = false)
	}, [allData, isMounted])

	if (loading) {
		return (
			<div
				style={{
					width: '100%',
					height: '45vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '10em',
				}}
			>
				<SyncLoader color='#662d91' size='30px' />
			</div>
		)
	}

	return (
		allProjects && (
			<Container fluid className='home-projects ' style={{ marginTop: '7em' }}>
				<h2
					className='text-center display-6'
					style={{ color: '#662d91', fontWeight: '400' }}
				>
					See all my projects
				</h2>
				<CardGroup className='d-flex cards'>
					<Row className='justify-content-around mx-0'>
						{allProjects.length !== 0 &&
							allProjects.map(project => (
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
												to={`/projects/${project.id}`}
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
											to={`/projects/${project.id}`}
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
