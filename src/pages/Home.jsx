import { useNavigate } from 'react-router-dom'
//components
import HomeAbout from '../components/HomeAbout'
import HomeProjects from '../components/HomeProjects'

import { Row, Col } from 'react-bootstrap'
//assets
import pdf from '../pdf/KubatSemiraCV.pdf'

function Home() {
	const navigate = useNavigate()
	return (
		<div>
			<HomeAbout />
			<HomeProjects />
			<Row
				className='w-80 mx-auto  align-items-center'
				style={{ boxSizing: 'border-box', justifyContent: 'space-evenly' }}
			>
				<Col
					xs={12}
					md={6}
					xl={3}
					className='align-self-center my-1 mx-auto text-center'
				>
					<button
						onClick={() => navigate('/about/cv')}
						className='cv py-2'
						style={{ textAlign: 'center', border: 'none', width: '100%' }}
					>
						See my CV
					</button>
				</Col>
				<Col
					xs={12}
					md={6}
					xl={3}
					className='align-self-center my-1 mx-auto text-center'
				>
					<a
						href={pdf}
						download
					>
						<button
							className='cv py-2'
							style={{ textAlign: 'center', border: 'none', width: '100%' }}
						>
							Download my CV
						</button>
					</a>
				</Col>
			</Row>
		</div>
	)
}
export default Home
