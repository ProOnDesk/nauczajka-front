import { useForm } from 'react-hook-form';
import { useAllAvailableSkills } from '../Settings/useAllAvailableSkills';
import { CiFileOff } from 'react-icons/ci';
import EditFormBtn from '../Settings/EditFormBtn';
import toast from 'react-hot-toast';
import Checkbox from '../../ui/Inputs/Checkbox';

function AddFilterContainer({ setModalVisible, setFilters, filters }) {
	const { availableSkills } = useAllAvailableSkills();
	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		const choosenSkills = [];
		for (const [key, value] of Object.entries(data)) {
			if (value === true) choosenSkills.push(key);
		}

		setFilters((prevFilters) => ({
			...prevFilters,
			skills: choosenSkills,
		}));

		toast.success('Ustawiono filtr przedmiotów');
		setModalVisible(null);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center flex-col gap-10'
		>
			<p className='text-2xl text-center'>Wybierz przedmioty</p>
			<div className='flex flex-wrap gap-2 md:mx-10'>
				{availableSkills?.length > 0 ? (
					availableSkills?.map((skill) => (
						<Checkbox
							register={register}
							key={skill.skill}
							defaultChecked={filters.skills?.find((el) => el === skill.skill)}
							label={skill.skill}
						/>
					))
				) : (
					<div className='flex w-full flex-col gap-2 justify-center items-center'>
						<span className='text-2xl'>
							<CiFileOff />
						</span>
						<p className='text-center'>Brak przedmiotów.</p>
					</div>
				)}
			</div>
			<div className='mt-6 flex flex-row flex-wrap-reverse gap-5 justify-center w-full'>
				<EditFormBtn onClick={() => setModalVisible(null)} type={'button'}>
					Anuluj
				</EditFormBtn>
				<EditFormBtn type={'submit'}>Zatwierdź</EditFormBtn>
			</div>
		</form>
	);
}

export default AddFilterContainer;
