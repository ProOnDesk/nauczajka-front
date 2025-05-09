import { createPortal } from 'react-dom';

function Modal({ children }: { children?: React.ReactNode }) {
	return createPortal(
		<div className='absolute w-full h-full left-0 top-0 bg-gray/10 z-50 flex justify-center items-center  '>
			<div className='bg-white shadow-md shadow-gray/30 rounded-md py-10 mx-5 px-5 w-full sm400:w-3/4 sm:w-3/5 md:w-1/2 xl:w-[600px] max-h-[80%] overflow-y-auto'>
				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
