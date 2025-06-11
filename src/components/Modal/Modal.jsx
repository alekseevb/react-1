import './Modal.css'
import { createPortal } from 'react-dom'
import { useRef } from 'react'

export default function Modal({ children, open }) {
	const dialog = useRef()

	if (open) {
		dialog.current.showModal()
	} else {
		dialog.current.close()
	}

	return createPortal(
		<dialog ref={dialog} open={open}>
			{children}
		</dialog>,
		document.getElementById('modal')
	)
}
