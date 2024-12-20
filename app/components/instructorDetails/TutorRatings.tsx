'use client';

import StarRating from '../StarRating';

function TutorRatings({ opinions }: { opinions: any }) {
	const tutorRatings = opinions?.results

	return (
		<div className='divide-y-[1px] divide-main'>
			{tutorRatings?.map((rate: any, id: number) => {
				const ratingDate = new Date(rate.created_at);

				return (
					<div className='p-2 text-sm my-5' key={id}>
						<div className='flex sm400:flex-row flex-col gap-2 sm400:justify-between sm400:items-center mb-5'>
							{rate.student_first_name || rate.student_last_name ? (
								<p className='text-lg font-bold'>
									{rate.student_first_name} {rate.student_last_name}
								</p>
							) : (
								<p className='text-lg font-bold'>Nieznany</p>
							)}
							<StarRating currRating={rate.rating} readOnly={true} />
						</div>
						<p className='my-2 text-base'>{rate.review}</p>
						<p className='font-bold'>
							{ratingDate.getDate()}{' '}
							{ratingDate.toLocaleString('default', { month: 'long' })}{' '}
							{ratingDate.getFullYear()}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default TutorRatings;
