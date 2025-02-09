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

export interface BlockCardProps {
  children: React.ReactNode;
  leftBorderColor?: string;
  footer?: React.ReactNode;
  className?: string;
}

export interface ContentBlockProps {
  heading: string; // Heading is a string
  children: React.ReactNode; // Content is passed as children
}

export interface CollapseProps {
  headerCollapsed: React.ReactNode;
  headerExpanded: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}