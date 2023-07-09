// * Production start
import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '/home/damner/code/src/App'
import SingleQuestion from '/home/damner/code/src/Question'
// * Production end

const questions = [
	{
		id: 1,
		title: 'Do I have to allow the use of cookes?',
		info:
			'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
	},
	{
		id: 2,
		title: 'How do I change my My Page password?',
		info:
			'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'
	},
	{
		id: 3,
		title: 'What is BankID?',
		info:
			'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.'
	},
	{
		id: 4,
		title: 'Whose birth number can I use?',
		info:
			'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.'
	},
	{
		id: 5,
		title: 'When do I recieve a password ordered by letter?',
		info:
			'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan '
	}
]

test('No info of questions should be visible by default', async () => {
	const { container } = render(<App />)
	questions.forEach((question) => {
		let fail = false
		try {
			screen.getByText(question.info.trim())
			fail = true
		} catch (error) {
			// pass
		}
		if (fail) throw 'error'
	})
})

test('All button values should be "+" by default', async () => {
	const { container } = render(<App />)
	expect(
		[...container.querySelectorAll('button')].filter((item) => item.innerHTML.trim() === '+')
			.length
	).toBe(5)
})

test('SingleQuestion', async () => {
	render(<SingleQuestion title="Hello" info="world" />)
	const info = screen.queryByText('world')
	expect(info).toBeNull()

	fireEvent.click(screen.getByText('+'))
	const infoAgain = screen.queryByText('world')
	expect(infoAgain).not.toBeNull()
})

test('SingleQuestion', async () => {
	render(<SingleQuestion title="Hello" info="world" />)
	const info = screen.queryByText('-')
	expect(info).toBeNull()

	fireEvent.click(screen.getByText('+'))
	const infoAgain = screen.queryByText('-')
	expect(infoAgain).not.toBeNull()
})
