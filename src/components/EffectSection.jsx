import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	useEffect(() => {
		async function fetchUsers() {
			setLoading(true)
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await response.json()
			setUsers(users)
			setLoading(false)
		}

		fetchUsers()
	}, [])

	return (
		<section>
			<h3>Effects</h3>

			<Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
				Открыть информацию
			</Button>
			<Modal open={modal}>
				<h3>Hello from modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					exercitationem iure eveniet odio distinctio quae optio ea libero
					officia ducimus ipsum tenetur nobis, cum officiis unde suscipit beatae
					quaerat voluptatum.
				</p>
				<Button onClick={() => setModal(false)}> Close modal</Button>
			</Modal>

			{loading && <p>Loading...</p>}

			{!loading && (
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</section>
	)
}
