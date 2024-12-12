export default function FeedbackModal() {
	return (
		<div className=''>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button
				className='px-4 py-2 bg-black rounded-lg text-white text-xl font-medium w-full'
				onClick={() => document.getElementById('my_modal_3').showModal()}
			>
				Feedback
			</button>
			<dialog id='my_modal_3' className='modal p-10'>
				<div className='bg-white w-[660px] rounded-[36px] p-10 flex flex-col gap-8'>
					<form method='dialog'>
						<div className='flex justify-between'>
							<h2 className='text-5xl'>Feedback form</h2>
							<button className='btn btn-sm btn-circle btn-ghost'>✕</button>
						</div>
					</form>
					<form action={''} className='flex flex-col gap-6'>
						<div className='flex flex-col gap-1.5'>
							<label htmlFor='name' className='text-xl'>
								Full name
							</label>
							<input
								type='text'
								placeholder='Name'
								name='name'
								className='px-3 py-2 border border-[#E4E5ED] rounded-lg'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<label htmlFor='email' className='text-xl'>
								Email for feedback
							</label>
							<input
								type='email'
								placeholder='pietro.schirano@gmail.com'
								name='email'
								className='px-3 py-2 border border-[#E4E5ED] rounded-lg'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<label htmlFor='link' className='text-xl'>
								Link to social network
							</label>
							<input
								type='text'
								placeholder=''
								name='link'
								className='px-3 py-2 border border-[#E4E5ED] rounded-lg'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<label htmlFor='link' className='text-xl'>
								Message
							</label>
							<textarea
								name=''
								id=''
								className='textarea textarea-bordered'
							></textarea>
						</div>
					</form>
					<div className=''>
						<form method='dialog'>
							<button className='px-8 py-3 bg-black rounded-lg w-full text-white text-2xl font-medium hover:bg-[#323232] duration-300'>Send</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}
