'use client';

import useForm from '@/hooks/useForm';
import classes from './ContactForm.module.scss';
import Button from './Button';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const ContactForm = () => {
	const {
		values,
		message,
		handleChange,
		clearForm,
		isModalOpen,
		handleSubmit,
		messageType,
		isLoading,
	} = useForm();

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<AnimatePresence initial={false} key='modal'>
				{isModalOpen && (
					<Modal
						message={message}
						type={messageType === 'error' ? 'error' : 'success'}
						key='modal'
					/>
				)}
			</AnimatePresence>
			<div className={classes.form__group}>
				<input
					type='text'
					id='name'
					className={classes.form__input}
					name='name'
					value={values.name}
					onChange={handleChange}
					required
				/>
				<label htmlFor='name' className={classes.form__label}>
					Name
				</label>
			</div>
			<div className={classes.form__group}>
				<input
					type='email'
					id='email'
					className={classes.form__input}
					name='email'
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
					placeholder='Email'
					value={values.email}
					onChange={handleChange}
					required
				/>
				<label htmlFor='email' className={classes.form__label}>
					Email
				</label>
			</div>
			<div className={classes.form__group}>
				<input
					type='text'
					id='subject'
					className={classes.form__input}
					name='subject'
					value={values.subject}
					onChange={handleChange}
					required
				/>
				<label htmlFor='subject' className={classes.form__label}>
					Subject
				</label>
			</div>
			<div className={classes.form__group}>
				<textarea
					name='message'
					id='message'
					className={classes.form__input}
					rows={5}
					value={values.message}
					onChange={handleChange}
					required
				></textarea>
				<label htmlFor='message' className={classes.form__label}>
					Message
				</label>
			</div>
			<Button
				name='send'
				type='submit'
				block
				ariaLabel='Send Email'
				disabled={isLoading}
			>
				Send
			</Button>
			<Button
				name='clear'
				type='reset'
				handleClick={clearForm}
				block
				ariaLabel='Clear all inputs'
			>
				Clear
			</Button>
		</form>
	);
};

export default ContactForm;
