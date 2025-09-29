# Onboarding Components

React components for onboarding flows with progress tracking and file uploads.

<img width="2560" height="3296" alt="image" src="https://github.com/user-attachments/assets/f9b8e2fa-6453-4e4b-b4d2-a9393bacffb7" />

<img width="2560" height="1928" alt="image" src="https://github.com/user-attachments/assets/d0728ebf-fd29-4563-844c-b580f64406d8" />

## Features

- **ProgressBar**: Step-by-step progress tracking with visual indicators
- **ContentUpload**: File upload cards with drag & drop, text input, and LinkedIn URL support
- **Drag & Drop**: File upload with visual feedback
- **Multiple File Types**: Resume, cover letter and LinkedIn profile
- **Validation**: Built-in file type and size validation
- **Error Handling**: Comprehensive error states and user feedback
- **Accessibility**: Full keyboard navigation and screen reader support

## Installation

```bash
npm install @ycb/onboarding-components
```

## Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom
```

And these dependencies for styling and functionality:

```bash
npm install @radix-ui/react-progress @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge
```

## Usage

### ProgressBar

```tsx
import { ProgressBar } from '@ycb/onboarding-components';

const steps = [
  { id: 'welcome', label: 'Welcome', status: 'completed' },
  { id: 'upload', label: 'Content', status: 'current' },
  { id: 'review', label: 'Review', status: 'pending' }
];

<ProgressBar steps={steps} currentStep="upload" />
```

### ContentUpload

```tsx
import { ContentUpload } from '@ycb/onboarding-components';
import { FileText } from 'lucide-react';

const config = {
  type: 'resume',
  title: 'Resume',
  description: 'Upload your resume to get started',
  icon: FileText,
  required: true
};

<ContentUpload 
  config={config}
  onFileUpload={(file) => console.log('File uploaded:', file)}
  onUploadComplete={(fileId, type) => console.log('Upload complete:', fileId)}
  onUploadError={(error) => console.error('Upload error:', error)}
/>
```

## Components

### ProgressBar Props

| Prop | Type | Description |
|------|------|-------------|
| `steps` | `ProgressStep[]` | Array of step objects |
| `currentStep` | `string` | ID of current step |
| `className` | `string` | Additional CSS classes |

### ContentUpload Props

| Prop | Type | Description |
|------|------|-------------|
| `config` | `UploadConfig` | Upload configuration object |
| `currentValue` | `string \| File` | Current uploaded value |
| `onFileUpload` | `(file: File) => void` | File upload handler |
| `onLinkedInUrl` | `(url: string) => void` | LinkedIn URL handler |
| `onTextInput` | `(text: string) => void` | Text input handler |
| `onUploadComplete` | `(fileId: string, type: string) => void` | Upload completion handler |
| `onUploadError` | `(error: string) => void` | Error handler |
| `className` | `string` | Additional CSS classes |

## Styling

This package uses Tailwind CSS for styling. Make sure to include Tailwind in your project:

```bash
npm install -D tailwindcss
```

## License

MIT
