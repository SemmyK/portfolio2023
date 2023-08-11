import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//components
import { CSSTransition } from 'react-transition-group'
import { Row, Col } from 'react-bootstrap'

function HostingLink({ project }) {
	const isMounted = useRef(true)
	const [inProp, setInProp] = useState(false)
	const nodeRef = useRef(null)

	useEffect(() => {
		if (isMounted) {
			setTimeout(() => setInProp(!inProp), 2000)
		}

		return () => (isMounted.current = false)
	}, [inProp])
	return (
		<Row className='justify-content-center align-items-center my-5 text-center'>
			<Col>
				<CSSTransition
					nodeRef={nodeRef}
					in={inProp}
					timeout={2000}
					classNames='fade'
				>
					<Link
						ref={nodeRef}
						target='_blank'
						to={project.hosting}
						className='hosting-link'
					>
						{project.description[project.description.length - 1]}
					</Link>
				</CSSTransition>
			</Col>
		</Row>
	)
}
export default HostingLink
