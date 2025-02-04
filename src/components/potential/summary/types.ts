export interface KeyOpportunityItem {
  title: string;
  description: string;
  id: string;
}

export interface SummaryProps {
  summaryText: string;
  opportunities: KeyOpportunityItem[];
}