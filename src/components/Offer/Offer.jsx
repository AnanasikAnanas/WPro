export default function Offer() {
	return (
		<section className='flex container flex-col gap-8 p-10 border border-black rounded-[24px]'>
			<div className='flex flex-col gap-10 font-medium'>
				<h3 className='text-5xl'>Order now and receive a gift!</h3>
				<h4 className='text-4xl'>
					when purchasing a keyboard, get a mouse pad as a gift or a 10%
					discount on your next order
				</h4>
			</div>
			<button className='px-4 py-2 bg-black rounded-lg w-fit text-white text-xl font-medium hover:bg-[#323232] duration-300'>Get special offer</button>
		</section>
	)
}
