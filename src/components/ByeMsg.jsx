import { useEffect, useState } from 'react'
//components
import { Container, Row } from 'react-bootstrap'
import TypeWriterEffect from 'react-typewriter-effect'

let words = [
	'a nice',
	'an amazing',
	'a wonderfull',
	'a beautifull',
	'a blissfull',
	'a joyfull',
	'a cheerfull',
	'a blessed',
]

const day = new Date().getDay()
const hours = new Date().getHours()

export default function ByeMsg() {
	const [dayOfWeek, SetDayOfWeek] = useState('')
	const [timeOfDay, setTimeOfDay] = useState('')

	useEffect(() => {
		day &&
			SetDayOfWeek(
				day === 1
					? 'Monday'
					: day === 2
					? 'Tuesday'
					: day === 3
					? 'Wednesday'
					: day === 4
					? 'Thursday'
					: day === 5
					? 'Friday'
					: day === 6
					? 'Saturday'
					: 'Sunday'
			)

		setTimeOfDay(
			hours < 12
				? 'morning'
				: hours < 18
				? 'afternoon'
				: hours < 22
				? 'evening'
				: 'night'
		)
	}, [])

	return (
		<>
			<Container fluid className=' byemsg '>
				<Row className='bye-msg-text justify-content-center'>
					Have
					<TypeWriterEffect
						typeSpeed={150}
						hideCursorAfterText={true}
						multiText={words}
						multiTextLoop
						cursorColor='transparent'
					></TypeWriterEffect>
					{dayOfWeek} and enjoy your {timeOfDay}!
				</Row>
			</Container>
		</>
	)
}
