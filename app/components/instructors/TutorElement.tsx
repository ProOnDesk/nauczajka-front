import { FaStar } from 'react-icons/fa6';

import { CiBag1 } from 'react-icons/ci';
import Link from 'next/link';
import TutorHeader from './TutorHeader';
import { Tutor } from './InstructorsList';

interface TutorElementProps {
	tutorInfo: Tutor;
}

function TutorElement({ tutorInfo }: TutorElementProps) {
	return (
		<Link
			href={`/instructors/${tutorInfo.id}`}
			className='flex flex-col md:flex-row justify-center md:justify-between border-whiteHover border-2 rounded-md p-2 gap-3 md:px-8 sm400:w-3/4 w-full mx-auto md:w-4/5 hover:bg-whiteHover group/tutorEl hover:cursor-pointer transition-colors'
		>
			<TutorHeader tutorInfo={tutorInfo} showLocation={true} />
			<div className='flex flex-row items-center justify-center gap-10 '>
				<p className='flex flex-col items-center text-gray'>
					{tutorInfo.avg_rating}
					<span className='text-2xl text-yellow-500 group-hover/tutorEl:text-mainSalmonHover transition-colors duration-300'>
						<FaStar />
					</span>
				</p>
				<div className='text-center'>
					<p className='text-2xl '>
						{tutorInfo?.price === 0 ? (
							<span className='flex justify-center'>
								<CiBag1 />
							</span>
						) : (
							tutorInfo?.price
						)}
					</p>
					<p className='text-sm text-gray'>zł/godz</p>
				</div>
			</div>
		</Link>
	);
}

export default TutorElement;
