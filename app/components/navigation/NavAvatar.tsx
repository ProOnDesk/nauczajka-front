import { API_KEY } from '@/app/api/apiAuth';
import Image from 'next/image';
import Link from 'next/link';

interface NavAvatarProps {
	user: any;
	size?: 'small' | 'large';
	href?: string;
	onClick?: () => void;
}

function NavAvatar({ user, size = 'large', href, onClick }: NavAvatarProps) {
	const content = (
		<div
			className={`flex flex-col items-center gap-2  ${
				size === 'large' && 'py-8'
			} ${size === 'small' && 'py-2 px-5'}`}
		>
			<div
				className={`aspect-square relative ${size === 'small' && 'w-12'} ${
					size === 'large' && 'w-24'
				}`}
			>
				<Image
					loader={({ src }) => src}
					placeholder='blur'
					blurDataURL={`${API_KEY}/static/media/uploads/user/default.jpg`}
					src={`${API_KEY}${'/static/media/uploads/user/default.jpg'}`}
					fill
					alt='User profile image'
					className='rounded-full shadow-md group-[.logo]:group-hover:border-main border-2 transition-colors duration-300'
				/>
			</div>

			<span
				className={`${size === 'small' && ''} ${
					size === 'large' && 'text-xl'
				}  text-gray`}
			>
				{user?.first_name}
			</span>
		</div>
	);
	return (
		<>
			{href && (
				<Link href={href} onClick={onClick} className='logo group '>
					{content}
				</Link>
			)}

			{onClick && !href && (
				<button onClick={onClick} className='logo group '>
					{content}
				</button>
			)}
		</>
	);
}

export default NavAvatar;