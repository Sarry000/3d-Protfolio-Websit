'use server';
/**
 * @fileOverview A flow to send an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

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

    // In a real application, you would use an email sending service like Resend or Nodemailer.
    // For this example, we'll log the email to the console.
    console.log('--- Sending Email ---');
    console.log(`To: ${recipient}`);
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`Subject: ${subject}`);
    console.log('---------------------');
    console.log(body);
    console.log('---------------------');
    // NOTE: The above console.log is a placeholder. You would need to integrate
    // a service like SendGrid, Mailgun, or use an SMTP server to actually send the email.
  }
);
