'use server';
/**
 * @fileOverview A flow to send an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  console.warn(
    'Missing RESEND_API_KEY environment variable. Emails will not be sent.'
  );
}

const resend = new Resend(process.env.RESEND_API_KEY);

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The message content.'),
});

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const EmailOutputSchema = z.object({
  subject: z.string().describe('A short, relevant subject line for the email.'),
  body: z.string().describe('The formatted email body.'),
});

// This is an exported wrapper function that can be called from server components.
export async function sendEmail(input: SendEmailInput): Promise<void> {
  await sendEmailFlow(input);
}

const emailPrompt = ai.definePrompt({
  name: 'emailPrompt',
  input: {schema: SendEmailInputSchema},
  output: {schema: EmailOutputSchema},
  prompt: `
    You are an assistant that creates an email from a contact form submission.
    The email should be addressed to "Sarthak". The user's name is {{name}} and their email is {{email}}.

    Generate a subject line that is concise and relevant to a portfolio contact form submission.
    Generate a body for the email that includes the user's message.
    Format the body professionally, clearly stating who the message is from.

    Message:
    {{{message}}}
  `,
});

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const {output} = await emailPrompt(input);
    if (!output) {
      throw new Error('Could not generate email content.');
    }
    const {subject, body} = output;
    const recipient = 'sarthakbukane2710@gmail.com';
    
    if (!process.env.RESEND_API_KEY) {
      // Fallback to console logging if Resend is not configured.
      console.log('--- RESEND_API_KEY not found. Logging email to console instead. ---');
      console.log(`To: ${recipient}`);
      console.log(`From: ${input.name} <${input.email}>`);
      console.log(`Subject: ${subject}`);
      console.log('---------------------');
      console.log(body);
      console.log('---------------------');
      return;
    }

    try {
      const { data, error } = await resend.emails.send({
        // IMPORTANT: This "from" address must be a verified domain in your Resend account.
        // For testing, Resend allows 'onboarding@resend.dev', which is what we are using here.
        from: 'SarthakVerse <onboarding@resend.dev>',
        to: [recipient],
        subject: subject,
        html: body.replace(/\n/g, '<br>'), // Resend prefers HTML, so we replace newlines.
        reply_to: input.email,
      });

      if (error) {
        // If Resend returns an error, log it and fall back to console.
        console.error('Resend API Error:', error);
        console.log('--- Resend failed. Logging email to console instead. ---');
        console.log(`To: ${recipient}`);
        console.log(`From: ${input.name} <${input.email}>`);
        console.log(`Subject: ${subject}`);
        console.log('---------------------');
        console.log(body);
        console.log('---------------------');
        // We are not throwing an error to the client anymore.
        return;
      }

      console.log('Email sent successfully:', data);

    } catch (e) {
      console.error('Failed to send email:', e);
      // We are not throwing an error to the client anymore.
      // throw new Error('Failed to send email.');
    }
  }
);
