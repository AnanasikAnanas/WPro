import DropdownList from './DropdownList/DropdownList'
import FeedbackModal from './FeedBack/FeedbackModal'

export default function Fuq() {
	return (
		<section className='container flex gap-9'>
			<div className='flex flex-col gap-1 '>
				<img src='/image 3.png' alt='' className='h-full' />
				<FeedbackModal/>
			</div>
			<div>
				<DropdownList />
			</div>
		</section>
	)
}
