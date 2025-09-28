import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { FileUploadCard } from "./FileUploadCard";

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

export function ContentUploadModule({
  currentStep,
  onFileUpload,
  onLinkedInUrl,
  onUploadComplete,
  onNextStep,
  isProcessing = false,
  onboardingData,
  linkedinUrl
}: ContentUploadModuleProps) {
  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <Card className="p-6">
        <div className="flex items-center justify-center relative">
          <h3 className="font-semibold text-gray-900 absolute left-0">Progress</h3>
          <div className="flex items-center space-x-8">
            {/* Step 1: Welcome */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {currentStep === 'welcome' ? (
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                )}
              </div>
              <span className={`text-sm font-medium ${currentStep === 'welcome' ? 'text-blue-600' : 'text-gray-900'}`}>
                Welcome
              </span>
            </div>
            
            {/* Connector line */}
            <div className="w-12 h-0.5 bg-gray-200"></div>
            
            {/* Step 2: Upload */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {currentStep === 'upload' ? (
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                ) : currentStep === 'welcome' ? (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white"></div>
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                )}
              </div>
              <span className={`text-sm font-medium ${currentStep === 'upload' ? 'text-blue-600' : 'text-gray-900'}`}>
                Content
              </span>
            </div>
            
            {/* Connector line */}
            <div className="w-12 h-0.5 bg-gray-200"></div>
            
            {/* Step 3: Review */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {currentStep === 'review' ? (
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                ) : ['welcome', 'upload'].includes(currentStep) ? (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white"></div>
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                )}
              </div>
              <span className={`text-sm font-medium ${currentStep === 'review' ? 'text-blue-600' : 'text-gray-900'}`}>
                Review
              </span>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Add Your Content
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <FileUploadCard
          type="resume"
          title="Resume"
          description=""
          icon={FileText}
          onFileUpload={onFileUpload}
          onUploadComplete={onUploadComplete}
          currentValue={onboardingData.resume}
        />
        
        <FileUploadCard
          type="linkedin"
          title="LinkedIn Profile"
          description="Enter your LinkedIn profile URL to import work history and skills"
          icon={Linkedin}
          onLinkedInUrl={onLinkedInUrl}
          onUploadComplete={onUploadComplete}
          currentValue={linkedinUrl}
        />
        
        <FileUploadCard
          type="coverLetter"
          title="Best Cover Letter"
          description=""
          icon={Mail}
          onFileUpload={onFileUpload}
          onUploadComplete={onUploadComplete}
          currentValue={onboardingData.coverLetter}
        />
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          onClick={onNextStep}
          disabled={!onboardingData.resume || (!onboardingData.coverLetter && !onboardingData.coverLetterFile)}
          className="px-8 py-3 text-lg"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              Review & Approve
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
