# SarthakVerse - A Dynamic Personal Portfolio

This is the repository for SarthakVerse, a futuristic and immersive personal portfolio website. Built with a modern tech stack including Next.js, React, and Tailwind CSS, this project showcases my skills, featured projects, and professional certifications. It was initially developed in Firebase Studio and features a sleek, responsive design with smooth animations and an integrated AI-powered contact form.

![Portfolio Demo](public/Portfoliooo.gif)

To see the live version or get started with the code, take a look at `src/app/page.tsx`.

## Core Features

*   **Interactive 3D Hero Section:** An engaging hero section featuring a 3D robot animation from Spline to immediately capture visitor attention.
*   **Dynamic Sections:** Clearly defined sections for About Me, Featured Projects, Professional Certifications, and Technical Skills.
*   **Smooth Animations:** Subtle, performant animations on scroll that enhance the user experience without compromising speed.
*   **AI-Powered Contact Form:** A fully functional contact form that uses Google Gemini to intelligently process the input and sends the email via Resend, all orchestrated through a Genkit flow.
*   **Responsive Design:** The layout is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices.

## Technology Stack

*   **Frontend:** [Next.js](https://nextjs.org/) (with App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/) for components, `lucide-react` for icons.
*   **Backend & AI:**
    *   **[Genkit (Google AI)](https://firebase.google.com/docs/genkit):** Powers the AI functionality for processing contact form submissions.
    *   **[Resend](https://resend.com/):** Handles the transactional email delivery for the contact form.
*   **3D Animation:** [Spline](https://spline.design/) for the interactive 3D hero element.

## Running Locally

To run this project on your local machine, you'll need to have [Node.js](https://nodejs.org/) (which includes npm) installed.

1.  **Download Your Code:** First, you'll need to get the code from your project onto your computer.

2.  **Open a Terminal:** Navigate to your project's root directory in your terminal or command prompt.

3.  **Install Dependencies:** Run the following command to install all the necessary packages:
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables:** Create a new file in the root of your project named `.env` and add the required environment variables.
    *   You can get a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   You can get a Resend API key from the [Resend website](https://resend.com/).
    ```.env
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
    RESEND_API_KEY=YOUR_RESEND_API_KEY_HERE
    ```
    **Note:** For Resend to send emails, you must also verify a domain. The "from" email address in `src/ai/flows/send-email-flow.ts` must use that verified domain. For testing, Resend allows you to use `onboarding@resend.dev`.

5.  **Run the Development Servers:** You need to run two servers simultaneously for the full application to work.

    *   **Next.js App (in your first terminal):**
        ```bash
        npm run dev
        ```
        This will start the website, typically on [http://localhost:9002](http://localhost:9002).

    *   **Genkit AI Flows (in a second terminal):**
        ```bash
        npm run genkit:dev
        ```
        This starts the server that handles the AI functionality (like sending emails).

You should now have the full application running locally!