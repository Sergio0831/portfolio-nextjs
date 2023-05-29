import ContactForm from '../UI/ContactForm';
import Section from '../UI/Section';
import classes from './Contact.module.scss';

const Contact = () => {
	return (
		<Section
			id='contact'
			title='Contact Me'
			subtitle='This is how you can contact me...'
			className={classes.contact}
		>
			<ContactForm />
		</Section>
	);
};

export default Contact;
