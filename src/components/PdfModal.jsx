import { useNavigate } from 'react-router-dom'
//assets
import cv from '../pdf/CV2023.pdf'
//style
import 'react-pdf/dist/Page/TextLayer.css'
//components
import { Row, Col } from 'react-bootstrap'
import { Document, Page } from 'react-pdf'

function PdfModal() {
	const navigate = useNavigate()
	return (
		<div style={{ marginTop: '7em' }}>
			<div className='cv-div'>
				<Document file={cv}>
					<Row>
						<Col xs={12} md={6}>
							<Page pageNumber={1} />
						</Col>
						<Col xs={12} md={6}>
							<Page pageNumber={2} />
							<button className='cv' onClick={() => navigate('/about')}>
								Go Back
							</button>
						</Col>
					</Row>
				</Document>
			</div>
		</div>
	)
}
export default PdfModal
