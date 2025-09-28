interface FileUploadCardProps {
    type: 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
    title: string;
    description: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
    onFileUpload?: (type: 'resume' | 'coverLetter' | 'caseStudies', file: File | null) => void;
    onLinkedInUrl?: (url: string) => void;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    currentValue?: string | File;
    onUploadComplete?: (fileId: string, type: string) => void;
}
export declare function FileUploadCard({ type, title, description, icon: Icon, onFileUpload, onLinkedInUrl, required, optional, disabled, currentValue, onUploadComplete }: FileUploadCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FileUploadCard.d.ts.map