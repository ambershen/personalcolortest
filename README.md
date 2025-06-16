# Personal Color Analysis App

A modern React TypeScript web application that analyzes personal colors based on uploaded photos to determine your seasonal color palette and provide personalized style recommendations.

## 🎨 Features

- **Image Upload**: Drag-and-drop interface for uploading up to 3 photos
- **Color Analysis**: AI-powered analysis of skin tone, hair color, and eye color
- **Seasonal Classification**: Determines your color season (Spring, Summer, Autumn, Winter)
- **Personalized Recommendations**: Suggests colors that complement your natural palette
- **Style Guidance**: Provides colors to avoid and styling tips
- **Responsive Design**: Beautiful, mobile-friendly interface with pastel gradients
- **Real-time Preview**: Instant preview of uploaded images

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Build Tool**: Vite
- **State Management**: React Context API
- **Routing**: React Router DOM
- **File Upload**: React Dropzone
- **Testing**: Jest + React Testing Library

## 📁 Project Structure

```
personalcolortest/
├── src/                    # Main application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ColorSwatch.tsx
│   │   │   └── UploadPreview.tsx
│   │   ├── screens/        # Main application screens
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── UploadScreen.tsx
│   │   │   ├── AnalyzeScreen.tsx
│   │   │   └── ResultScreen.tsx
│   │   ├── context/        # React Context for state management
│   │   │   └── UploadContext.tsx
│   │   ├── services/       # API and business logic
│   │   │   └── analyzeApi.ts
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json        # Dependencies and scripts
└── tst/                    # Unit tests
    ├── UploadContext.test.tsx
    ├── jest.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd personalcolortest
   ```

2. **Install dependencies**:
   ```bash
   cd src
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173/` to view the application

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🧪 Testing

The project includes comprehensive unit tests for the core functionality.

### Running Tests

1. **Navigate to test directory**:
   ```bash
   cd tst
   ```

2. **Install test dependencies**:
   ```bash
   npm install
   ```

3. **Run tests**:
   ```bash
   # Run all tests
   npm test
   
   # Run tests in watch mode
   npm run test:watch
   
   # Run tests with coverage
   npm run test:coverage
   ```

### Test Coverage

- ✅ UploadContext state management
- ✅ React hooks and context providers
- ✅ Error handling and edge cases
- ✅ File upload functionality
- ✅ State transitions and data flow

## 📱 Usage

1. **Welcome Screen**: Start your color analysis journey
2. **Upload Photos**: Drag and drop or click to upload 2-3 clear photos
3. **Analysis**: Wait for the AI to analyze your natural colors
4. **Results**: View your seasonal color palette and recommendations

### Photo Guidelines

- Upload 2-3 high-quality photos
- Ensure good lighting (natural light preferred)
- Include clear views of face, hair, and eyes
- Avoid heavy makeup or filters

## 🎨 Color Analysis

The app analyzes:

- **Skin Undertones**: Warm, cool, or neutral
- **Hair Color**: Natural hair color and undertones
- **Eye Color**: Iris color and depth
- **Seasonal Classification**: Spring, Summer, Autumn, or Winter

## 🔧 Configuration

### Tailwind CSS

The app uses Tailwind CSS with custom configuration:
- Custom color palette
- Gradient utilities
- Responsive breakpoints
- Component-specific styling

### PostCSS

Configured with:
- Tailwind CSS processing
- Autoprefixer for browser compatibility

## 🚀 Deployment

### Build for Production

```bash
cd src
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload to S3 bucket with CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new functionality
- Use meaningful commit messages
- Ensure responsive design
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Color theory and seasonal analysis principles
- React and TypeScript communities
- Tailwind CSS for beautiful styling
- Vite for fast development experience

## 📞 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs
4. Provide your environment details (OS, Node version, etc.)

---

**Happy Color Analysis! 🌈**