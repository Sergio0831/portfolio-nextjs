import { useCallback, useEffect, useState } from 'react';

type FormFields = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const sendEmail = async ({
	name,
	email,
	subject,
	message,
}: FormFields): Promise<FormFields> => {
	const response = await fetch('/api/sendEmail', {
		method: 'POST',
		body: JSON.stringify({ name, email, subject, message }),
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	});

	if (!response.ok) {
		throw new Error('Failed to send message');
	}

	return response.json();
};

const useForm = () => {
	const [message, setMessage] = useState<string>('');
	const [messageInfo, setMessageInfo] = useState<{
		info: string;
		type: string;
	}>({
		info: '',
		type: '',
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [values, setValues] = useState<FormFields>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
			setValues((prevValues) => ({
				...prevValues,
				[e.target.name]: e.target.value,
			}));
		},
		[],
	);

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
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
				setMessageInfo({
					info: 'Thank you for contacting me.',
					type: 'success',
				});
				setIsModalOpen(true);
				setIsLoading(false);
			} catch (error: any) {
				setIsModalOpen(true);
				setMessageInfo({ info: error.message, type: 'error' });
				setIsLoading(false);
			}
		},
		[values],
	);

	const clearForm = useCallback(() => {
		setValues({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(false);
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [isModalOpen]);

	return {
		message: messageInfo.info,
		isModalOpen,
		setIsModalOpen,
		handleChange,
		clearForm,
		handleSubmit,
		values,
		messageType: messageInfo.type,
		isLoading,
	};
};

export default useForm;
