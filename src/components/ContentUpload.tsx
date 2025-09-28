import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Upload, 
  CheckCircle, 
  AlertTriangle,
  Link as LinkIcon
} from 'lucide-react';

export interface UploadConfig {
  type: 'resume' | 'linkedin' | 'coverLetter' | 'caseStudies';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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

export function ContentUpload({
  config,
  currentValue,
  onFileUpload,
  onLinkedInUrl,
  onTextInput,
  onUploadComplete,
  onUploadError: _onUploadError,
  className
}: ContentUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [coverLetterText, setCoverLetterText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { type, title, description, icon: Icon, required, optional, disabled } = config;

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
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    if (disabled) return;
    
    setError(null);
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      onFileUpload?.(file);
      onUploadComplete?.('mock-file-id', type);
    }, 1000);
  }, [disabled, onFileUpload, onUploadComplete, type]);

  const handleLinkedInSubmit = useCallback(() => {
    if (!linkedInUrl.trim()) {
      setError('Please enter a LinkedIn URL');
      return;
    }
    
    setError(null);
    onLinkedInUrl?.(linkedInUrl);
    onUploadComplete?.('mock-linkedin-id', 'linkedin');
  }, [linkedInUrl, onLinkedInUrl, onUploadComplete]);

  const handleTextSubmit = useCallback(() => {
    if (!coverLetterText.trim()) {
      setError('Please enter cover letter text');
      return;
    }
    
    setError(null);
    onTextInput?.(coverLetterText);
    onUploadComplete?.('mock-text-id', 'coverLetter');
  }, [coverLetterText, onTextInput, onUploadComplete]);

  const renderFileUpload = () => (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && document.getElementById(`file-input-${type}`)?.click()}
      >
        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600">
          {isDragOver ? 'Drop file here' : 'Drag & drop or click to upload'}
        </p>
        <input
          id={`file-input-${type}`}
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          disabled={disabled}
        />
      </div>
      
      {currentValue && (
        <div className="flex items-center gap-2 text-green-600 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>File uploaded successfully</span>
        </div>
      )}
    </div>
  );

  const renderLinkedInInput = () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={linkedInUrl}
          onChange={(e) => setLinkedInUrl(e.target.value)}
          disabled={disabled}
          className="flex-1"
        />
        <Button 
          onClick={handleLinkedInSubmit}
          disabled={disabled || !linkedInUrl.trim()}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </div>
      
      {currentValue && (
        <div className="flex items-center gap-2 text-green-600 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>LinkedIn profile connected</span>
        </div>
      )}
    </div>
  );

  const renderTextInput = () => (
    <div className="space-y-4">
      <Textarea
        placeholder="Paste your cover letter text here..."
        value={coverLetterText}
        onChange={(e) => setCoverLetterText(e.target.value)}
        disabled={disabled}
        rows={6}
      />
      
      <Button 
        onClick={handleTextSubmit}
        disabled={disabled || !coverLetterText.trim()}
        className="w-full"
      >
        Add Cover Letter Text
      </Button>
      
      {currentValue && (
        <div className="flex items-center gap-2 text-green-600 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>Cover letter text added</span>
        </div>
      )}
    </div>
  );

  const getStatusBadge = () => {
    if (currentValue) {
      return <Badge variant="secondary" className="bg-green-100 text-green-800">Complete</Badge>;
    }
    if (required) {
      return <Badge variant="destructive">Required</Badge>;
    }
    if (optional) {
      return <Badge variant="outline">Optional</Badge>;
    }
    return null;
  };

  return (
    <Card className={`${className || ''} ${disabled ? 'opacity-50' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      
      <CardContent>
        {type === 'linkedin' ? renderLinkedInInput() : 
         type === 'coverLetter' ? renderTextInput() : 
         renderFileUpload()}
        
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
            <AlertTriangle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
        
        {isUploading && (
          <div className="flex items-center gap-2 text-blue-600 text-sm mt-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span>Uploading...</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
