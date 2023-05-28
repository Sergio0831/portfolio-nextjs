import { NextResponse } from 'next/server';

//import nodemailer from 'nodemailer';

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// export const transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: email,
// 		pass,
// 	},
// });

// export const mailOptions = {
// 	from: email,
// 	to: email,
// };

export async function POST(request: Request) {
	if (request.method === 'POST') {
		const { name, email, subject, message } = await request.json();
		console.log(name);
		return NextResponse.json(
			{ name, email, subject, message },
			{ status: 200 },
		);
	}
}
