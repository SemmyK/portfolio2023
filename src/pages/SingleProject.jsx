import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
//hooks
import useFirebaseFirestore from '../hooks/useFirebaseFirestore'
import { useDataContext } from '../hooks/useDataContext'
//components
import { SyncLoader } from 'react-spinners'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TypeWriterEffect from 'react-typewriter-effect'
import HostingLink from '../components/HostingLink'

function SingleProject() {
	const isMounted = useRef(true)
	const { id } = useParams()
	const { getDocById } = useFirebaseFirestore()
	const { data: project, error, loading } = useDataContext()

	useEffect(() => {
		const projectData = async () => {
			try {
				await getDocById(id)
			} catch (error) {
				console.log(error)
			}
		}
		if (isMounted) {
			projectData()
		}

		return () => (isMounted.current = false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

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

	if (error) {
		return (
			<div style={{ marginTop: '7em', textAlign: 'center' }}>
				<h2>{error}</h2>
			</div>
		)
	}
	console.log(project)
	return (
		project && (
			<Container fluid style={{ marginTop: '7em' }}>
				<h2 className='project-name'>{project.name}</h2>
				<Container fluid className=' byemsg lead'>
					<Row className='bye-msg-text justify-content-center'>
						This project uses
						<TypeWriterEffect
							typeSpeed={150}
							hideCursorAfterText={true}
							multiText={project.used}
							multiTextLoop
							cursorColor='transparent'
						></TypeWriterEffect>
					</Row>
				</Container>
				<article>
					{project &&
						project.description
							.slice(0, project.description.length - 1)
							.map((des, index) => {
								return (
									<section key={des} className='my-5 mx-auto'>
										<Container fluid>
											<Row
												className='justify-content-between'
												style={{
													flexDirection: `${
														index % 2 === 0 ? 'row' : 'row-reverse'
													} `,
												}}
											>
												<Col
													sm={10}
													md={5}
													className='text-right img-col mx-auto'
													style={{
														textAlign: `${
															project.photos[index] === undefined
																? 'center'
																: 'right'
														}`,
													}}
												>
													{project && project.photos[index] !== undefined && (
														<img
															src={project.photos[index]}
															alt='profile'
															className='img-fluid'
														/>
													)}
												</Col>
												<Col
													sm={12}
													md={project.photos[index] === undefined ? 10 : 5}
													className='short-about text-dark mx-auto '
												>
													<Card.Body>
														<Card.Text>{des}</Card.Text>
													</Card.Body>
												</Col>
											</Row>
										</Container>
									</section>
								)
							})}
				</article>
				{project && <HostingLink project={project} />}
			</Container>
		)
	)
}
export default SingleProject
