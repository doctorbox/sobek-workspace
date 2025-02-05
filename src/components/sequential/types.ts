export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface ToggleButtonProps {
  isActive: boolean;
  children: React.ReactNode;
}