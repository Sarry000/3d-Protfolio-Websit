# SarthakVerse Portfolio - Personal Website

This is a personal portfolio website built with Next.js, showcasing my projects, skills, and providing a way to contact me. It was initially created in Firebase Studio and is designed to be a responsive and modern representation of my work.

![Portfolio Demo](public/Portfoliooo.gif)

To get started, take a look at `src/app/page.tsx`.

## Technologies Used

*   **Next.js:** A React framework for server-side rendering and static site generation.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Firebase:** Used for backend services (specifically for the contact form).
*   **Google Gemini:** Integrated for AI functionality, powering the contact form's email generation.
*   **Resend:** Used for sending emails from the contact form.

## Features

*   **Projects Section:** Displays a portfolio of my work.
*   **Skills Section:** Highlights my technical skills.
*   **Contact Section:** Provides a form for visitors to get in touch, which sends an email via Resend.
*   **Responsive Design:** Adapts to different screen sizes.

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
    **Note:** For Resend to send emails, you must also verify a domain. The "from" email address in `src/ai/flows/send-email-flow.ts` must use that verified domain.

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


