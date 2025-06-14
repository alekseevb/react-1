import React from 'react'

// export default function IntroSection() {
// 	return (
// 		<section>
// 			<h1 className='centered'>Result University</h1>
// 			<h3 className='centered' style={{ color: '#666' }}>
// 				Университет frontend-разработки, который насыщает IT-сферу
// 				квалифицированными программистами
// 			</h3>
// 		</section>
// 	)
// }

// есть альтернавтивный вариант чисто на jsx

export default function IntroSection() {
	return React.createElement('section', null, [
		React.createElement(
			'h1',
			{ className: 'centered', key: 1 },
			'Result University'
		),
		React.createElement(
			'h3',
			{ className: 'centered', key: 2, style: { color: '#666' } },
			'Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами'
		),
	])
}
