import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASS,
	},
});

export async function POST(request: Request) {
	const { name, email, subject, message } = await request.json();
	if (!name || !email || !subject || !message) {
		return NextResponse.json({ message: 'Bad request' }, { status: 400 });
	}

	try {
		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL,
			subject: subject,
			text: `Email: ${email}\n\nMessage: ${message}`,
		});
		return NextResponse.json(
			{ message: 'Email sent successfully' },
			{ status: 200 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: 'Failed to send email' },
			{ status: 400 },
		);
	}
}
