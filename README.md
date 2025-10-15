# CVGenius – AI Resume Analyzer

![License](https://img.shields.io/badge/License-MIT-green.svg) ![Node](https://img.shields.io/badge/node-20.x-blue) ![React](https://img.shields.io/badge/React-19-61dafb) ![React%20Router](https://img.shields.io/badge/React%20Router-7-red) ![Vite](https://img.shields.io/badge/Vite-6-646cff)

## 📝 Description

CVGenius is a server‑rendered web app that helps job seekers rapidly evaluate and improve their resumes against modern hiring workflows. It integrates with Puter.js for secure, browser‑based auth, file storage, key‑value persistence, and AI chat to produce structured, actionable feedback.

Where manual resume reviews are slow, subjective, and fragmented across tools, CVGenius centralizes the flow: upload a PDF, provide job context, and get an ATS‑aware analysis with clear improvement tips. This reduces typical manual effort by surfacing consistent, structured feedback in one place, and by persisting your submissions for easy comparison later.

## ✨ Features

-   **Upload once, analyze instantly**: Drag‑and‑drop PDF upload with client‑side conversion to a preview image for quick visual verification. Saves the hassle of using separate PDF viewers or converters.
-   **ATS‑aware scoring**: Generates an ATS score and targeted tips, addressing common pain points like keyword mismatch and formatting issues to reduce guesswork.
-   **Contextual feedback**: Incorporates job title and description into analysis instructions to align feedback with real roles, cutting down on irrelevant recommendations.
-   **Persistent history**: Stores each analysis in key‑value storage (`resume:*`) so you can revisit prior uploads and compare progress, avoiding manual note‑taking.
-   **Secure, user‑centric storage**: Uses Puter’s in‑browser filesystem for uploads; your files and data remain scoped to your account, lowering setup overhead.
-   **One‑click data management**: A dedicated page to wipe all files and stored entries when you want a clean slate—no manual cleanup required.
-   **Delightful UX**: SSR for fast initial loads, Tailwind CSS v4 styling, and a focused UI that makes the review journey clear and motivating.

## 🖼️ Demo / Screenshots

-   Upload flow (status and animation during analysis):

    ![Upload animation](public/images/resume-scan.gif)

-   Loading and preview during processing:

    ![Processing preview](public/images/resume-scan-2.gif)

-   Example resume thumbnails (static assets used in UI):

    ![Resume examples](public/images/resume-01.png)

## ⚙️ Installation

The project uses Node.js and npm. It is built with Vite and React Router (SSR). A Dockerfile is provided for containerized builds and runs.

### Prerequisites

-   Node.js 20.x (Dockerfile base image: `node:20-alpine`)
-   npm (comes with Node)

### Local development

```bash
# Install dependencies (uses package-lock.json)
npm install

# Start the dev server (SSR + HMR)
npm run dev
```

-   The terminal will print the local URL to open in a browser.
-   The app loads `https://js.puter.com/v2/` at runtime; ensure internet access for Puter to initialize.

### Build and serve

```bash
# Generate the production build
npm run build

# Serve the built app (SSR server)
npm run start
```

-   The start script runs `react-router-serve` with the built server bundle at `./build/server/index.js`.

### Docker

A multi‑stage Dockerfile is included and builds the app with production dependencies only.

```bash
# Build the image
docker build -t cvgenius:latest .

# Run the container (expose the default server port, e.g., 3000)
# Note: The actual port is determined by the server at runtime; map as needed.
docker run --rm -p 3000:3000 cvgenius:latest
```

## 🚀 Usage

1. **Authenticate**

    - Navigate to `/auth`. Use the provided Log In/Log Out controls backed by Puter auth.
    - On first load, Puter initializes via the script in the root layout. If Puter fails to load, the UI will report “Puter.js not available.”

2. **Upload and analyze a resume**

    - Go to `/upload`.
    - Enter company name, job title, and paste the job description.
    - Upload a PDF and click “Analyze Resume.”
    - The app uploads your file to the Puter filesystem, converts the first page to an image, stores metadata under `resume:{uuid}`, and requests AI feedback. You’ll be redirected to `/resume/{id}` when analysis completes.

3. **Review results**

    - At `/resume/{id}`, view an image preview of your resume and the structured feedback: overall score, ATS score with tips, and categorized details (Tone & Style, Content, Structure, Skills).

4. **Manage stored data**
    - At `/wipe`, view your stored files and wipe all files and KV data with one click when needed.

### Before vs. After workflows

-   Manual review vs. **Automated analysis**:
    -   Before: Open PDFs in a viewer, skim job descriptions, draft notes, cross‑reference guidelines.
    -   After: Upload once; receive structured feedback aligned with the job context in one view.
-   Ad‑hoc tips vs. **ATS‑aware scoring**:
    -   Before: Guess which keywords or formats matter; inconsistent advice.
    -   After: A guided ATS score and targeted tips reduce uncertainty and rework.
-   Scattered tracking vs. **Persistent history**:
    -   Before: Keep files and notes across folders and docs.
    -   After: Each submission is stored and quickly discoverable on the homepage.

## 🔧 Configuration

-   No `.env` configuration is required by this repository.
-   External dependency: `Puter.js` is loaded at runtime in `app/root.tsx`:
    -   `<script src="https://js.puter.com/v2/"></script>`
-   AI model selection is set in `lib/puter.ts` during `feedback` calls: `{ model: "claude-3-7-sonnet" }`.
-   PDF rendering uses `pdfjs-dist` with a worker hosted at `public/pdf.worker.min.mjs`.

## 🗂️ Folder Structure

```text
ai-resume-analyzer/
├─ app/                       # React Router app (SSR enabled)
│  ├─ app.css                 # Tailwind CSS v4 styles + utilities
│  ├─ components/             # Reusable UI components (ATS, Summary, Details, etc.)
│  ├─ root.tsx                # App layout, Puter init, error boundary
│  ├─ routes/                 # Route modules: auth, home, upload, resume, wipe
│  └─ routes.ts               # Route config mapping paths to files
├─ constants/                 # AI instruction builders and sample data
├─ hooks/                     # UI hooks (accordion state)
├─ lib/                       # Puter integration, pdf conversion, utilities
├─ public/                    # Static assets (icons, images, pdf.worker)
├─ types/                     # Global TypeScript types (Feedback, Resume, etc.)
├─ react-router.config.ts     # SSR configuration
├─ vite.config.ts             # Vite plugins: Tailwind, React Router, TS paths
├─ tsconfig.json              # TypeScript strict config
├─ package.json               # Scripts & dependencies
├─ Dockerfile                 # Multi-stage build and runtime image
└─ LICENSE                    # MIT license
```

## 🧱 Architecture & Execution Flow

-   **Runtime**: React Router (SSR) serves pages; client hydrates for interactivity.
-   **Auth & Storage**: `lib/puter.ts` wraps the Puter SDK (auth, fs, kv, ai) behind a Zustand store (`usePuterStore`). The root layout injects Puter’s script and calls `init()` to check auth status.
-   **Upload flow**: `/upload` → upload PDF via Puter FS → convert first page to image with `pdfjs-dist` → upload image → persist `resume:{uuid}` record via KV → call `ai.feedback` with instructions from `constants/` → store parsed JSON feedback → redirect to `/resume/{uuid}`.
-   **Review flow**: `/resume/:id` reads metadata from KV, fetches blobs from Puter FS, creates object URLs, and renders ATS, Summary, and Details components.
-   **Data management**: `/wipe` enumerates files with `fs.readdir("./")`, deletes each, and flushes KV.

## 🤝 Contributing

Contributions are welcome. A suggested flow:

1. Fork the repository on GitHub.
2. Create a feature branch from `main`.
3. Use `npm run dev` during development; ensure TypeScript passes via `npm run typecheck`.
4. Commit with clear messages and open a pull request explaining the change and its impact.

> Note: This repo does not include a separate CONTRIBUTING.md; follow the steps above and keep changes focused and well‑documented.

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

## 👤 Author

| Name          | GitHub                                             | LinkedIn                                                             |
| ------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| NgnPhamGiaHuy | [@NgnPhamGiaHuy](https://github.com/NgnPhamGiaHuy) | [Nguyen Pham Gia Huy](https://www.linkedin.com/in/nguyenphamgiahuy/) |

## 🙏 Acknowledgements

-   React, React Router, and Vite for the modern app foundation.
-   Tailwind CSS v4 for utility‑first styling.
-   `pdfjs-dist` for reliable PDF rendering in the browser.
-   Puter.js for auth, storage, KV, and AI APIs that remove backend setup.
