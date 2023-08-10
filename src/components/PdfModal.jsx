import { Row, Col } from 'react-bootstrap'
import cv from '../pdf/CV2023.pdf'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import { useNavigate } from 'react-router-dom'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

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
