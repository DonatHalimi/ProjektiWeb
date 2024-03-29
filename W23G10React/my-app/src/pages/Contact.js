import { React, Fragment, useEffect, useRef } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import '../style/contactstyle.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Contact() {

	// useEffect per me scroll ToTop sa here hapet faqja
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const form = useRef();

	// Funksioni per me dergu nje email kur user-i klikon send 
	const sendEmail = async (e) => {
		e.preventDefault();

		// Marrja e te dhenave prej fushave te formes
		const name = form.current.user_name.value;
		const email = form.current.user_email.value;
		const message = form.current.message.value;

		// Kontrollojme nese jane mbushur te gjitha fushat
		if (!name || !email || !message) {
			// Shfaqim nje mesazh nese ka fusha te zbrazta
			toast.error('Please fill in all required fields.');
			return;
		}

		// Shfaqim mesazhim se eshte duke u dergu mesazhi
		const toastId = toast.info('Sending message...');

		try {
			// Dergimi i email-es duke perdorur sherbimin e emailjs
			const result = await emailjs.sendForm('service_9q1z8tr', 'template_wdwnt9j', form.current, 'SUFff_EJ-PNqCxJ92');
			console.log(result.text);

			// Bejme update mesazhin kur dergohet mesazhi ne email
			toast.update(toastId, {
				type: toast.TYPE.SUCCESS,
				render: 'Message sent successfully!',
				autoClose: 3000,
			});
		} catch (error) {
			console.log(error.text);

			// Nese ka gabim bejme update mesazhin duke i treguar user-it
			toast.update(toastId, {
				type: toast.TYPE.ERROR,
				render: 'Failed to send message. Please try again.',
				autoClose: 3000,
			});
		}
	};

	// JSX per me render Contact page
	return (
		<Fragment>
			<Menu />
			<div className="search-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<span className="close-btn"><i className="fas fa-window-close"></i></span>
							<div className="search-bar">
								<div className="search-bar-tablecell">
									<h3>Search For:</h3>
									<input type="text" placeholder="Keywords" />
									<button type="submit">Search <i className="fas fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="breadcrumb-section hero-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="breadcrumb-text">
								<p>Get 24/7 Support</p>
								<h1>Contact us</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="contact-from-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mb-5 mb-lg-0">
							<div className="form-title">
								<h2>Do you have any questions?</h2>
								<p>If you have any inquiries or need assistance, feel free to reach out to us. We are here to help and provide you with the information you need. Your satisfaction is our priority, and we look forward to addressing any questions or concerns you may have.</p>
							</div>
							<div id="form_status"></div>
							<div className="contact-form">
								<form ref={form} onSubmit={sendEmail}>
									<label>Name</label>
									<input type="text" name="user_name" />
									<label>Email</label>
									<input type="email" name="user_email" />
									<label>Message</label>
									<textarea name="message" />
									<input type="submit" value="Send" />
								</form>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-form-wrap">
								<div className="contact-form-box">
									<h4><i className="fas fa-map"></i> Shop Address</h4>
									<p>34/8 Prishtinë <br /> Kosovë</p>
								</div>
								<div className="contact-form-box">
									<h4><i className="far fa-clock"></i> Shop Hours</h4>
									<p>MON - FRIDAY: 8 AM to 9 PM <br /> SAT - SUN: 10 AM to 8 PM </p>
								</div>
								<div className="contact-form-box">
									<h4><i className="fas fa-address-book"></i> Contact</h4>
									<p>Phone: +383 44 555 444 <br /> Email: support@cozyreads.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Fragment >
	);
};
export default Contact;