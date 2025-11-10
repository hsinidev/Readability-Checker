
# Doodax - Online Readability Checker

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React Version](https://img.shields.io/badge/react-18%2B-%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?logo=tailwind-css&logoColor=white)

Doodax is a modern, single-page React application that provides a powerful, free online readability checker. It analyzes text in real-time to calculate its Flesch-Kincaid grade level, highlighting complex sentences to help writers improve clarity and impact. The application mirrors the functionality of popular writing aids, offering a clean, intuitive interface alongside marketing sections that upsell a premium, AI-powered "Editor Plus" version.

---

## ✨ Features

-   **🚀 Real-Time Analysis:** Get an instant Flesch-Kincaid grade level score as you type.
-   **🎨 Dynamic Highlighting:** Sentences are automatically highlighted in yellow (hard) and red (very hard) based on word count, providing immediate visual feedback.
-   **✍️ Interactive Editor:** A clean, `contentEditable` div provides a smooth editing experience.
-   **📂 Multiple Input Options:** Paste text from your clipboard, import a local file (`.txt`, `.md`), or use sample text to get started quickly.
-   **🤖 AI-Powered Rewrites (Upsell):** A simulated "Editor Plus" feature demonstrates the potential of integrating a Large Language Model (LLM) for automated text simplification.
-   **📈 Detailed Stats:** See a breakdown of word, sentence, and syllable counts.
-   **📱 Fully Responsive:** A fluid design that works seamlessly on desktop, tablet, and mobile devices.
-   ** SEO-Optimized:** Includes a comprehensive, 3500+ word collapsible article on readability, complete with JSON-LD schema, to attract organic traffic.
-   ** modals:** Clean, accessible modals for About, Contact, Privacy Policy, and other essential information.

## 🛠️ Technology Stack

-   **Frontend:** React 18, TypeScript
-   **Styling:** Tailwind CSS
-   **Core Logic:** Pure JavaScript & React Hooks (no external libraries for the readability calculation).
-   **AI Integration (Placeholder):** Uses `@google/genai` for the Gemini API to showcase the premium rewrite feature.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/doodax-editor.git
    cd doodax-editor
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables (for AI feature):**
    Create a `.env` file in the root of the project and add your Gemini API key.
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```

4.  **Run the development server:**
    ```bash
    npm start
    ```
    The application should now be running on [http://localhost:3000](http://localhost:3000).

## 🧠 Core Logic Explained

### Flesch-Kincaid Grade Level

The readability score is calculated using the well-established Flesch-Kincaid Grade Level formula:

`Grade = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59`

-   **Word & Sentence Count:** These are calculated by splitting the input text using regex patterns.
-   **Syllable Count:** A heuristic-based algorithm provides a reliable estimate of syllables per word, which is a standard and performant approach for client-side calculations.

All calculations are memoized using the `useMemo` hook for optimal performance, re-running only when the input text changes.

## 📂 Project Structure

The project follows a component-based architecture to ensure maintainability and scalability.

```
/
├── public/
│   ├── index.html      # HTML template
│   └── favicon.svg     # App favicon
├── src/
│   ├── components/
│   │   ├── ReadabilityChecker.tsx  # Core editor and logic
│   │   └── ThemeLayout.tsx         # Main layout, header, footer, modals
│   ├── utils/
│   │   └── SeoArticle.tsx          # Collapsible SEO content
│   ├── App.tsx             # Main app component, assembles pages
│   └── index.tsx           # Entry point for React
├── .env                  # Environment variables (API Key)
├── README.md             # You are here!
└── package.json
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Powered by HSINI MOHAMED** - [GitHub Profile](https://github.com/hsinidev)
