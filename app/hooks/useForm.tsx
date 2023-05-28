import { useEffect, useState } from 'react';

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
	const [messageState, setMessageState] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
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
		setIsLoading(true);
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
			setMessageState('succes');
			setIsLoading(false);
		} catch (error: any) {
			setIsModalOpen(true);
			setMessage(error.message);
			setMessageState('error');
			setIsLoading(false);
		}
	};

	const clearForm = () => {
		setValues({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(false);
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [isModalOpen]);

	return {
		message,
		isModalOpen,
		setIsModalOpen,
		handleChange,
		clearForm,
		handleSubmit,
		values,
		messageState,
		isLoading,
	};
};

export default useForm;
