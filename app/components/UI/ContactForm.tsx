'use client';

import useForm from '@/hooks/useForm';
import classes from './ContactForm.module.scss';
import Button from './Button';

type ContactFormProps = {};

const ContactForm = () => {
	const {
		values,
		message,
		handleChange,
		clearForm,
		closeModal,
		isModalOpen,
		handleSubmit,
	} = useForm();

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			{/* {isModalOpen && <Modal message={message} closeModal={closeModal} />} */}
			<div className={classes.form__group}>
				<input
					type='name'
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
			<Button name='send' type='submit' block ariaLabel='Send Email'>
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
