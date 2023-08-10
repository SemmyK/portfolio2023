import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useDataContext } from '../hooks/useDataContext'
import { SyncLoader } from 'react-spinners'
import { useEffect, useState } from 'react'

export default function HomeProjects() {
	const { allData, loading } = useDataContext()
	const [newProjects, setNewProjects] = useState([])

	useEffect(() => {
		allData && setNewProjects(allData.slice(0, 3))
	}, [allData])

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
		newProjects && (
			<Container fluid className='home-projects '>
				<CardGroup className='d-flex cards'>
					<Row className='justify-content-around mx-0'>
						{newProjects.length !== 0 &&
							newProjects.map(project => (
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
