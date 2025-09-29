interface ContentUploadModuleProps {
    currentStep: string;
    onFileUpload: (type: 'resume' | 'coverLetter' | 'caseStudies', file: File | null) => void;
    onLinkedInUrl: (url: string) => void;
    onTextInput: (text: string) => void;
    onUploadComplete: (fileId: string, type: string) => void;
    onUploadError: (error: string) => void;
    onNextStep: () => void;
    isProcessing?: boolean;
    onboardingData: {
        resume?: File;
        coverLetter?: string;
        coverLetterFile?: File;
    };
    linkedinUrl?: string;
}
export declare function ContentUploadModule({ currentStep, onFileUpload, onLinkedInUrl, onTextInput, onUploadComplete, onUploadError, onNextStep, isProcessing, onboardingData, linkedinUrl }: ContentUploadModuleProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ContentUploadModule.d.ts.map