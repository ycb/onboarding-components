import { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Upload, 
  FileText, 
  AlertTriangle
} from "lucide-react";

interface FileUploadCardProps {
  type: 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  onFileUpload?: (type: 'resume' | 'coverLetter' | 'caseStudies', file: File | null) => void;
  onLinkedInUrl?: (url: string) => void;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  currentValue?: string | File;
  onUploadComplete?: (fileId: string, type: string) => void;
}

export function FileUploadCard({
  type,
  title,
  description,
  icon: Icon,
  onFileUpload,
  onLinkedInUrl,
  required = false,
  optional = false,
  disabled = false,
  currentValue,
  onUploadComplete
}: FileUploadCardProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [coverLetterText, setCoverLetterText] = useState(currentValue || '');
  const [uploadedFileId, setUploadedFileId] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Update local state when currentValue prop changes
  useEffect(() => {
    if (type === 'coverLetter' && currentValue) {
      setCoverLetterText(currentValue);
    }
  }, [currentValue, type]);

  // Unified error message component
  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
      <AlertTriangle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );

  // Smart combination logic
  const hasUploadedFile = uploadedFileId !== null;
  const hasTextInput = typeof coverLetterText === 'string' && coverLetterText.trim().length >= 10;
  const hasBoth = hasUploadedFile && hasTextInput;

  const isCompleted = (currentValue && (
    type === 'resume' || type === 'coverLetter' || type === 'caseStudies' 
      ? currentValue instanceof File 
      : type === 'linkedin' 
        ? typeof currentValue === 'string' && currentValue.length > 0
        : false
  )) || uploadedFileId !== null;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    const file = files[0];
    handleFileUpload(file);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Clear errors when user starts typing or interacting
  const handleLinkedInUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedInUrl(e.target.value);
    if (error) setError(null);
  }, [error]);

  const handleCoverLetterTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCoverLetterText(e.target.value);
    if (error) setError(null);
  }, [error]);

  const handleFileUpload = useCallback((file: File) => {
    if (!onFileUpload) return;

    // Clear any previous errors
    setError(null);

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      setError('File size must be less than 5MB');
      return;
    }

    // Validate file type
    const allowedTypes = ['.pdf', '.docx', '.txt', '.md'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      setError('File type must be PDF, DOCX, TXT, or MD');
      return;
    }

    // Store the file immediately for UI
    onFileUpload(type as 'resume' | 'coverLetter' | 'caseStudies', file);
    
    // Update local state to show success immediately
    setUploadedFileName(file.name);
    setUploadedFileId(`${file.name}_${Date.now()}`);
    
    // Call upload complete callback to update parent
    onUploadComplete?.(`${file.name}_${Date.now()}`, type);
  }, [onFileUpload, type, onUploadComplete]);

  const handleLinkedInSubmit = useCallback(() => {
    if (!onLinkedInUrl) return;

    // Clear any previous errors
    setError(null);

    // Trim whitespace from URL before processing
    const trimmedUrl = linkedInUrl.trim();
    
    // Validate LinkedIn URL format
    const linkedinUrlPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    
    if (!linkedinUrlPattern.test(trimmedUrl)) {
      setError('Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)');
      return;
    }
    
    // Store the URL immediately for UI
    onLinkedInUrl(trimmedUrl);
    
    // Update local state to show success immediately
    setUploadedFileId(`linkedin_${Date.now()}`);
    
    // Call upload complete callback to update parent
    onUploadComplete?.(`linkedin_${Date.now()}`, 'linkedin');
  }, [linkedInUrl, onLinkedInUrl, onUploadComplete]);

  const renderFileUpload = () => (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex justify-center mb-6">
          <Upload className="w-12 h-12 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-6">
          Drag and drop your file here, or
        </p>
        <div className="mb-6">
          <input
            type="file"
            className="hidden"
            accept=".pdf,.docx,.txt,.md"
            onChange={handleFileSelect}
            id={`${type}-file`}
          />
          <label
            htmlFor={`${type}-file`}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
          >
            Choose File
          </label>
        </div>
        <p className="text-sm text-gray-500">
          PDF, DOCX, TXT, MD (max 5MB)
        </p>
        {error && <ErrorMessage message={error} />}
      </div>

      {/* Add paste option for resume */}
      {type === 'resume' && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Paste resume content directly for fast and reliable processing
            </label>
            <Textarea
              placeholder="Paste your resume content here..."
              value={typeof coverLetterText === 'string' ? coverLetterText : ''}
              onChange={handleCoverLetterTextChange}
              rows={3}
            />
          </div>
        </>
      )}
    </div>
  );

  const renderLinkedInInput = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          LinkedIn Profile URL
        </label>
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            value={linkedInUrl}
            onChange={handleLinkedInUrlChange}
            className="flex-1"
          />
          <Button 
            onClick={handleLinkedInSubmit}
            disabled={!linkedInUrl.trim()}
            size="sm"
            variant="secondary"
          >
            Connect
          </Button>
        </div>
        {isCompleted && (
          <p className="text-sm text-green-600">Valid LinkedIn URL</p>
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );

  const renderCoverLetterInput = () => (
    <div className="space-y-4">
      {/* File Upload Section */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex justify-center mb-6">
          <Upload className="w-12 h-12 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-6">
          Drag and drop your file here, or
        </p>
        <div className="mb-6">
          <input
            type="file"
            className="hidden"
            accept=".pdf,.docx,.txt,.md"
            onChange={handleFileSelect}
            id="cover-letter-file"
          />
          <label
            htmlFor="cover-letter-file"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
          >
            Choose File
          </label>
        </div>
        <p className="text-sm text-gray-500">
          PDF, DOCX, TXT, MD (max 5MB)
        </p>
        {error && <ErrorMessage message={error} />}
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Text Input Section */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Or paste cover letter content directly for fast and reliable processing
        </label>
        <Textarea
          placeholder="Paste your best cover letter content here..."
          value={typeof coverLetterText === 'string' ? coverLetterText : ''}
          onChange={handleCoverLetterTextChange}
          rows={3}
        />
      </div>

      {hasBoth && (
        <div className="flex items-center gap-2 text-blue-600 text-sm bg-blue-50 p-3 rounded-lg">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          <span>You have both a file and text. We'll combine them into one submission.</span>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    if (type === 'linkedin') {
      return renderLinkedInInput();
    }
    if (type === 'coverLetter') {
      return renderCoverLetterInput();
    }
    return renderFileUpload();
  };

  return (
    <Card className={`transition-all duration-200 ${
      isCompleted ? 'ring-2 ring-green-200 bg-green-50' : ''
    } ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <CardHeader className="pb-4 -mx-6 -mt-6 px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            isCompleted ? 'bg-green-100' : 'bg-gray-100'
          }`}>
            <Icon className={`w-6 h-6 ${
              isCompleted ? 'text-green-600' : 'text-gray-600'
            }`} />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              {title}
              {required && <Badge variant="destructive" className="text-xs">Required</Badge>}
              {optional && <Badge variant="secondary" className="text-xs">Optional</Badge>}
            </CardTitle>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {isCompleted && type !== 'linkedin' ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{uploadedFileName || 'File uploaded'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Clear all file-related state
                    setUploadedFileId(null);
                    setUploadedFileName(null);
                    setError(null);
                    // Clear parent state
                    onFileUpload?.(type as 'resume' | 'coverLetter' | 'caseStudies', null as any);
                  }}
                  className="text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:underline"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </CardContent>
    </Card>
  );
}