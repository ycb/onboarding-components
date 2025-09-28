export interface ProgressStep {
    id: string;
    label: string;
    status: 'pending' | 'current' | 'completed';
}
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
export type FileType = 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
//# sourceMappingURL=index.d.ts.map