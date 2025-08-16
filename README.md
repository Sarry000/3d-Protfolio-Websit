# SarthakVerse Portfolio

This is a Next.js portfolio website created in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Running Locally

To run this project on your local machine, you'll need to have [Node.js](https://nodejs.org/) (which includes npm) installed.

1.  **Download Your Code:** First, you'll need to get the code from your project onto your computer.

2.  **Open a Terminal:** Navigate to your project's root directory in your terminal or command prompt.

3.  **Install Dependencies:** Run the following command to install all the necessary packages:
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables:** Create a new file in the root of your project named `.env` and add any necessary environment variables. For the AI features (like the contact form) to work, you will need a Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```.env
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

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
        This starts the server that handles the AI functionality.

You should now have the full application running locally!
