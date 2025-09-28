interface FileUploadCardProps {
    type: 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
    title: string;
    description: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
    onFileUpload?: (type: 'resume' | 'coverLetter' | 'caseStudies', file: File | null) => void;
    onLinkedInUrl?: (url: string) => void;
    onTextInput?: (text: string) => void;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    currentValue?: string | File;
    onUploadComplete?: (fileId: string, type: string) => void;
    onUploadError?: (error: string) => void;
}
export declare function FileUploadCard({ type, title, description, icon: Icon, onFileUpload, onLinkedInUrl, onTextInput, required, optional, disabled, currentValue, onUploadComplete, onUploadError }: FileUploadCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FileUploadCard.d.ts.map