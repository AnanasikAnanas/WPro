function Dropdown({ title, text }) {
	return (
		<div className='collapse collapse-arrow py-8 px-6 border-y rounded-none border-black'>
			<input type='radio' name='my-accordion-2' defaultChecked />
			<div className='collapse-title text-5xl font-medium'>{title}</div>
			<div className='collapse-content'>
				<p className='text-xl'>{text}</p>
			</div>
		</div>
	)
}

export default function DropdownList() {
	return (
		<div className=''>
			<Dropdown
				title={'What does an 8K Hz polling rate do?'}
				text={
					'This means that the keyboard transmits information 8 times faster than standard devices, which significantly improves accuracy in games and work.'
				}
			/>
			<Dropdown
				title={'What are the benefits of magnetic switches?'}
				text={
					'Magnetic switches provide a smoother click and have no mechanical parts, which extends the life of the keyboard.'
				}
			/>
			<Dropdown
				title={'What does an 8K Hz polling rate do?'}
				text={
					'This means that the keyboard transmits information 8 times faster than standard devices, which significantly improves accuracy in games and work.'
				}
			/>
			<Dropdown
				title={'What are the benefits of magnetic switches?'}
				text={
					'Magnetic switches provide a smoother click and have no mechanical parts, which extends the life of the keyboard.'
				}
			/>
		</div>
	)
}
