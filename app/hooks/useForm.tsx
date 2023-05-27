import { useState } from 'react';

type FormFields = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const sendEmail = async (data: FormFields): Promise<FormFields> =>
	fetch('/api/sendEmail', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	}).then((res) => {
		if (!res.ok) throw new Error('Failed to send message');
		return res.json();
	});

const useForm = () => {
	const [message, setMessage] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [values, setValues] = useState<FormFields>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await sendEmail(values);
			setValues({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
			setMessage('Thank you for contacting me.');
			setIsModalOpen(true);
		} catch (error: any) {
			setIsModalOpen(true);
			setMessage(error.message);
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const clearForm = () => {
		setValues({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
	};

	return {
		message,
		isModalOpen,
		setIsModalOpen,
		handleChange,
		clearForm,
		handleSubmit,
		closeModal,
		values,
	};
};

export default useForm;
