import { useNavigate } from 'react-router-dom'
//assets
import cv1 from '../assets/cv1.png'
import cv2 from '../assets/cv2.png'
//components
import { Row, Col } from 'react-bootstrap'

function PdfModal() {
	const navigate = useNavigate()
	return (
		<div style={{ marginTop: '7em' }}>
			<div className='cv-div'>
				<Row>
					<Col xs={12} md={6}>
						<img src={cv1} alt='cv page 1' className='img-fluid d-block' />
					</Col>
					<Col xs={12} md={6}>
						<img src={cv2} alt='cv page 2' className='img-fluid d-block' />
						<button className='cv' onClick={() => navigate('/about')}>
							Go Back
						</button>
					</Col>
				</Row>
			</div>
		</div>
	)
}
export default PdfModal
