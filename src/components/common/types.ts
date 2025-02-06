export interface StepProps {
  number?: string;
  title: string;
  description: string;
  source?: string;
}

export interface ToggleButtonProps {
  isActive: boolean;
  children: React.ReactNode;
}