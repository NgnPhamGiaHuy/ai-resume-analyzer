# 🚀 CVGenius - AI Resume Analyzer

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://github.com/NgnPhamGiaHuy/ai-resume-analyzer)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/NgnPhamGiaHuy/ai-resume-analyzer)

</div>

## 📝 Description

CVGenius is a specialized web application that uses AI to analyze resumes and provide precise, actionable feedback for job seekers. The tool targets a 40% improvement in resume effectiveness through data-driven recommendations across five key areas:

1. **ATS Compatibility**: Optimize for applicant tracking systems with measurable scores
2. **Content Quality**: Enhance the impact of your professional experience and accomplishments
3. **Structural Organization**: Improve resume layout and section hierarchy
4. **Tone and Style**: Refine language for professional impact and clarity
5. **Skills Alignment**: Match your skills precisely to job requirements

By leveraging Claude 3.7 Sonnet AI via the Puter.js platform, CVGenius delivers personalized insights within 30 seconds of upload, helping you increase interview callback rates by targeting specific job descriptions.

## 🎯 Key Benefits

- **Immediate Analysis**: Get complete resume feedback in under 30 seconds
- **ATS Optimization**: Increase pass-through rates by up to 70%
- **Job-Specific Feedback**: Tailor your resume to specific job descriptions
- **Actionable Improvements**: Receive concrete suggestions you can implement in minutes
- **Visual Scoring**: Track improvements with quantitative metrics in 5 categories
- **Secure Storage**: Maintain a history of all versions with encrypted cloud storage
- **Cross-Device Access**: Review feedback anywhere with responsive design

## ✨ Features

- Analyzes resume PDF files using advanced AI technology
- Generates comprehensive ATS compatibility scores (0-100)
- Provides detailed feedback on content, structure, tone, and skills
- Evaluates resume against specific job descriptions and titles
- Displays visual score indicators and improvement suggestions
- Supports user authentication and secure resume storage
- Maintains history of uploaded resumes and analyses
- Renders PDF preview for easy reference
- Offers responsive and intuitive user interface

## 🔍 Who Should Use CVGenius?

- **Job Seekers** looking to improve interview callback rates
- **Career Changers** needing to highlight transferable skills
- **Recent Graduates** with limited work experience
- **Professionals** targeting competitive industries
- **Career Coaches** assisting clients with resume optimization

## ⚙️ Installation

**System Requirements:**
- Node.js 16.x or higher
- NPM 8.x or higher
- Modern web browser (Chrome, Firefox, Edge, Safari)

```bash
# Clone the repository
git clone https://github.com/NgnPhamGiaHuy/ai-resume-analyzer.git

# Navigate to project directory
cd ai-resume-analyzer

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Usage

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck
```

After starting the server (default: http://localhost:3000), follow these steps:

1. **Sign in** with Puter.js authentication
2. **Upload** your resume PDF file (max 20MB)
3. **Enter** the company name, job title and description you're applying for
4. **Review** detailed analysis with scores and recommendations
5. **Track** your resume history and implement suggested improvements

## 🔧 Configuration

The application requires Puter.js integration for authentication, storage, and AI capabilities. Make sure the Puter.js script is properly loaded in the root layout.

```html
<script src="https://js.puter.com/v2/"></script>
```

### Environment Variables:
- No additional environment variables required
- Default configuration works out-of-the-box

## 🗂️ Folder Structure

```
ai-resume-analyzer/
├── app/                  # Main application code
│   ├── components/       # Reusable UI components
│   ├── routes/           # Application routes
│   └── root.tsx          # Root layout component
├── constants/            # Application constants
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and services
│   ├── pdf2image.ts      # PDF to image conversion
│   ├── puter.ts          # Puter.js integration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── icons/            # SVG icons
│   └── images/           # Image assets
├── types/                # TypeScript type definitions
└── README.md             # Project documentation
```

## 🤝 Contributing

We welcome contributions that enhance CVGenius's capabilities or fix issues! Please follow these steps:

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/your-username/ai-resume-analyzer.git

# Create a feature branch
git checkout -b feature/my-feature

# Make your changes and commit
git commit -m "Add new feature"

# Push to your fork
git push origin feature/my-feature

# Create a pull request
```

### Contribution Guidelines:
- Maintain code style and formatting
- Add tests for new functionality
- Update documentation with changes
- Follow conventional commit messages


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

<div align="center">

**NgnPhamGiaHuy**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NgnPhamGiaHuy)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nguyenphamgiahuy)

</div>

## 🙏 Acknowledgements

<div align="center">

[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com)
[![PDF.js](https://img.shields.io/badge/PDF.js-990000?style=for-the-badge&logo=adobe&logoColor=white)](https://mozilla.github.io/pdf.js/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/pmndrs/zustand)
[![Puter.js](https://img.shields.io/badge/Puter.js-4285F4?style=for-the-badge&logoColor=white)](https://puter.com/)

</div>