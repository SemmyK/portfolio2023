//components
import { StyledFooter } from '../styled/Footer.styles'
import { Col, Row } from 'react-bootstrap'
//icons
import LinkedIn from '../assets/icons/LinkedIn-white_icon.png'
import GitHub from '../assets/icons/github-white.png'
import Email from '../assets/icons/email-white.png'

function Footer() {
	return (
		<StyledFooter>
			<Row className='footer-content'>
				<Col xs={12} sm={4} className=' align-self-center text-center'>
					Made by Semmy &copy; 2023
				</Col>
				<Col xs={12} sm={8} md={4}>
					<Row className='footer-content'>
						<Col xs={4}>
							<a
								href='https://www.linkedin.com/in/semira-kubat-81724720a/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={LinkedIn} alt=' linkedIn' className='icons ' />
							</a>
						</Col>
						<Col xs={4}>
							<a
								href='https://github.com/SemmyK'
								target='_blank'
								rel='noreferrer'
							>
								<img src={GitHub} alt='Github' className='icons ' />
							</a>
						</Col>
						<Col xs={4}>
							<a
								href='mailto:semmywork@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<img src={Email} alt='Github' className='icons ' />
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</StyledFooter>
	)
}
export default Footer
