export interface InfoRowProps {
  title: string;
  content: string;
  minHeight?: string;
}

export interface AcceptButtonProps {
  iconSrc: string;
  text: string;
  onClick: () => void;
}