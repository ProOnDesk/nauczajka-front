import Link from 'next/link';
import { ReactNode } from 'react';
import Spinner from './Spinner';

interface BaseProps {
	children: ReactNode;
}

interface ButtonProps extends BaseProps {
	type: 'button';
	href?: never;
	disabled?: boolean;
	onClick?: () => void;
	isLoading?: boolean;
}

interface LinkProps extends BaseProps {
	type: 'link';
	href: string;
	disabled?: never;
	onClick?: never;
	isLoading?: never;
}

type Props = ButtonProps | LinkProps;

function Button({ children, type, href, disabled, onClick, isLoading }: Props) {
	return (
		<>
			{type === 'button' && (
				<button
					className={`px-6 py-2 rounded-xl text-white bg-main hover:bg-mainHover transition-colors duration-300 hover:cursor-pointer`}
					disabled={disabled || isLoading}
					onClick={onClick}
				>
					{isLoading ? (
						<span className='flex justify-center items-center'>
							<Spinner size='small' color='white' />
						</span>
					) : (
						children
					)}
				</button>
			)}
			{type === 'link' && (
				<Link
					href={href}
					className={`px-6 py-2 rounded-xl text-white bg-main hover:bg-mainHover transition-colors duration-300`}
				>
					{children}
				</Link>
			)}
		</>
	);
}

export default Button;
