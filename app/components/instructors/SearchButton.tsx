interface SearchButtonProps {
	isActive: boolean;
	onClick: () => void;
	icon: React.ReactNode;
	activeIcon?: React.ReactNode;
	children: React.ReactNode;
}

function SearchButton({ isActive, onClick, icon, activeIcon, children } : SearchButtonProps) {
	return (
		<button
			className={`px-2 py-1 flex items-center gap-2 bg-white rounded-md border-whiteHover border-2 text-gray hover:border-main transition-colors`}
			onClick={onClick}
		>
			<span className={`text-xl ${isActive && 'text-mainSalmon'}`}>
				{isActive ? activeIcon ?? icon : icon}
			</span>
			{children}
		</button>
	);
}

export default SearchButton;
