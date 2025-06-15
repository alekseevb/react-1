import './Modal.css'
import { createPortal } from 'react-dom' // позволяет разместить модальное окно над всеми элементами
import { useRef, useEffect } from 'react'

export default function Modal({ children, open }) {
	const dialog = useRef()

	useEffect(() => {
		if (open) {
			dialog.current.showModal()
		} else {
			dialog.current.close()
		}
	}, [open]) // регистрируем функционал, который должен выполнить React

	return createPortal(
		<dialog ref={dialog}>{children}</dialog>,
		document.getElementById('modal')
	)
}
