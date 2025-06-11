import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
	const [modal, setModal] = useState()

	function openModal() {
		setModal(true)
	}

	return (
		<section>
			<h3>Effects</h3>

			<Button onClick={openModal}>Открыть информацию</Button>
			<Modal open={modal}>
				<h3>Hello from modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					exercitationem iure eveniet odio distinctio quae optio ea libero
					officia ducimus ipsum tenetur nobis, cum officiis unde suscipit beatae
					quaerat voluptatum.
				</p>
			</Modal>
		</section>
	)
}
