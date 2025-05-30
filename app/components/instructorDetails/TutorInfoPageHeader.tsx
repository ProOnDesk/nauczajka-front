'use client';

import { CiMail } from 'react-icons/ci';
import TutorHeader from '../instructors/TutorHeader';
import Button from '../Button';
import { MouseEvent } from 'react';
import { useCreateChatMutation } from '@/redux/features/chatsApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';

function TutorInfoPageHeader({ tutorInfo }: any) {
	const [createChat, { isLoading }] = useCreateChatMutation();
	const router = useRouter();
	function openChatHandler(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		createChat({ user_id: tutorInfo.user_id })
			.unwrap()
			.then((data) => {
				router.push(`/chats?conversation_id=${data.id}`);
			})
			.catch((err) => {
				toast.error('Nie udało się otworzyć czatu');
			});
	}

	return (
		<form className='flex flex-col items-center justify-center md:flex-row md:justify-between px-5 gap-5 max-w-5xl mx-auto'>
			<TutorHeader tutorInfo={tutorInfo} showLocation={false} />
			<Button
				onClick={(e: MouseEvent<HTMLButtonElement>) => openChatHandler(e)}
				type='button'
				className={'flex items-center gap-2'}
				disabled={isLoading}
			>
				{!isLoading ? (
					<>
						<span className='text-2xl'>
							<CiMail />
						</span>
						Napisz wiadomość{' '}
					</>
				) : (
					<Spinner size='small' />
				)}
			</Button>
		</form>
	);
}

export default TutorInfoPageHeader;
