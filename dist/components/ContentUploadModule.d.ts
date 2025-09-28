interface ContentUploadModuleProps {
    currentStep: string;
    onFileUpload: (type: 'resume' | 'coverLetter' | 'caseStudies', file: File | null) => void;
    onLinkedInUrl: (url: string) => void;
    onUploadComplete: (fileId: string, type: string) => void;
    onNextStep: () => void;
    isProcessing?: boolean;
    onboardingData: {
        resume?: File;
        coverLetter?: string;
        coverLetterFile?: File;
    };
    linkedinUrl?: string;
}
export declare function ContentUploadModule({ currentStep, onFileUpload, onLinkedInUrl, onUploadComplete, onNextStep, isProcessing, onboardingData, linkedinUrl }: ContentUploadModuleProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ContentUploadModule.d.ts.map