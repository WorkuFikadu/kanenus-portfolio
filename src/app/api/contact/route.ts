import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiry, message } = body;

    // Here you would typically integrate with a database or email service
    // like Resend, SendGrid, or a local SQLite database to store the inquiry.

    console.log('Received contact form submission:', { name, email, inquiry, message });

    return NextResponse.json(
      { message: 'Message received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
