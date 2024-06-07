import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
	const { email } = await req.json();

	if (!email) {
		return NextResponse.json({ error: "Email is required" }, { status: 400 });
	}

	const API_KEY = process.env.CONVERTKIT_API_KEY;
	const FORM_ID = process.env.CONVERTKIT_FORM_ID;

	const data = {
		email,
		api_key: API_KEY,
	};

	const response = await fetch(
		`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(data),
		}
	);

	if (response.ok) {
		return NextResponse.json({ data: response.json() }, { status: 201 });
	} else {
		const errorData = await response.json();
		return NextResponse.json(
			{ error: errorData.error || "Something went wrong" },
			{ status: 400 }
		);
	}
}
