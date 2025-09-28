import { default as React } from 'react';

export interface UploadConfig {
    type: 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
    title: string;
    description: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
}
export interface ContentUploadProps {
    config: UploadConfig;
    currentValue?: string | File;
    onFileUpload?: (file: File) => void;
    onLinkedInUrl?: (url: string) => void;
    onTextInput?: (text: string) => void;
    onUploadComplete?: (fileId: string, type: string) => void;
    onUploadError?: (error: string) => void;
    className?: string;
}
export declare function ContentUpload({ config, currentValue, onFileUpload, onLinkedInUrl, onTextInput, onUploadComplete, onUploadError: _onUploadError, className }: ContentUploadProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ContentUpload.d.ts.map