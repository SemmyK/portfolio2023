import { useEffect, useState } from 'react'
import { Container, Card, Row } from 'react-bootstrap'

let quoteData = []
fetch('https://type.fit/api/quotes')
	.then(function (response) {
		return response.json()
	})
	.then(function (data) {
		quoteData = data
	})

export default function Quote() {
	const [quote, setQuote] = useState({
		text: 'Learning without reflection is a waste, reflection without learning is dangerous.',
		author: 'Confucius',
	})
	const [fade, setFade] = useState('fade-in')
	const [random, setRandom] = useState(0)

	useEffect(() => {
		const timeout = setInterval(() => {
			if (fade === 'fade-in') {
				setRandom(Math.floor(Math.random() * quoteData.length))

				setFade('fade-out')
			} else {
				setFade('fade-in')
				if (random && quoteData[random].text.length < 90) {
					let newQoute = {
						...quoteData[random],
						author: quoteData[random].author.slice(
							0,
							quoteData[random].author.indexOf(',')
						),
					}

					if (newQoute.author === 'type.fit') {
						newQoute = { ...newQoute, author: 'Unknown author' }
					}
					setQuote(newQoute)
				}
			}
		}, 4000)
		return () => clearInterval(timeout)
	}, [fade, random])

	return (
		<Container fluid className='quote text-right'>
			{quote && (
				<Card className='quote-box'>
					<Card.Body className={fade}>
						<blockquote className='blockquote mb-1 pb-1 '>
							<Row>
								<Row className='quote-row'>{quote.text}</Row>
								<footer className='blockquote-footer'>
									<cite title='Source Title' className='quote-author'>
										<Row>{quote.author && quote.author}</Row>
									</cite>
								</footer>
							</Row>
						</blockquote>
					</Card.Body>
				</Card>
			)}
		</Container>
	)
}
