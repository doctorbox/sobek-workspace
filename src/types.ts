/**
 * Represents an item in a document.
 */
export interface DocumentItem {
    title: string;
}

/**
 * Interface representing the properties of a project.
 */
export interface ProjectDetailsProps {
    title: string;
    organization: string;
    location: string;
    timeline: string;
    description: string;
    documents: DocumentItem[];
}

export interface FeatureCardProps {
    title: string;
    description: string;
}
