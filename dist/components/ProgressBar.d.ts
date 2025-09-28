export interface ProgressStep {
    id: string;
    label: string;
    status: 'pending' | 'current' | 'completed';
}
export interface ProgressBarProps {
    steps: ProgressStep[];
    currentStep: string;
    className?: string;
}
export declare function ProgressBar({ steps, currentStep: _currentStep, className }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProgressBar.d.ts.map