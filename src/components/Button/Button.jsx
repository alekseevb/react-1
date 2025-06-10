import clases from './Button.module.css'

export default function Button({ children, isActive, ...props }) {
	return (
		<button
			{...props}
			className={isActive ? `${clases.button} ${clases.active}` : clases.button}
		>
			{children}
		</button>
	)
}
