import { CiEdit } from 'react-icons/ci';

interface SettingsElementProps {
	label?: string;
	children: React.ReactNode;
	onClick?: () => void;
	hoverDisabled?: boolean;
	labelIcon?: React.ReactNode;
}

function SettingsElement({
	label,
	children,
	onClick,
	hoverDisabled,
	labelIcon,
} : SettingsElementProps) {
	return (
		<button
			className={`relative p-4 flex flex-row flex-wrap gap-2 justify-between bg-white shadow-md shadow-shadowBlack rounded-md overflow-hidden cursor-default `}
			onClick={onClick}
		>
			{(label || labelIcon) && (
				<div>
					<div className='flex items-center gap-1'>
						<p className='text-xl'>{labelIcon}</p>
						<p>{label}</p>
					</div>
				</div>
			)}
			<div>
				<p className='text-left text-sm'>{children}</p>
			</div>
			{!hoverDisabled && (
				<div className='absolute w-full h-full left-0 top-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-mainBlue/90 transition-all hover:cursor-pointer'>
					<span className='text-3xl text-white'>
						<CiEdit />
					</span>
				</div>
			)}
		</button>
	);
}

export default SettingsElement;
