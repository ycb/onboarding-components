import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

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

export function ProgressBar({ steps, currentStep: _currentStep, className }: ProgressBarProps) {
  return (
    <Card className={`p-6 ${className || ''}`}>
      <div className="flex items-center justify-center relative">
        <h3 className="font-semibold text-gray-900 absolute left-0">Progress</h3>
        <div className="flex items-center space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  {step.status === 'current' ? (
                    <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  ) : step.status === 'completed' ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white"></div>
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  step.status === 'current' ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {step.label}
                </span>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="w-12 h-0.5 bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
}
