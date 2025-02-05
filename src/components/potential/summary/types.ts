export interface KeyOpportunityItem {
  title: string;
  description: string;
  id: number;
}

export interface SummaryProps {
  summaryText: string;
  opportunities: KeyOpportunityItem[];
}