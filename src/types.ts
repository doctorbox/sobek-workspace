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

export interface AvatarProps {
    initials: string;
    className?: string;
}

export interface TeamMemberProps {
    title: string;
    name: string;
}

export interface ProjectDetailProps {
    organization: string;
    location: string;
    timeline: string;
    budget: string;
    teamSize: string;
}

export interface KeyChallengeProps {
    challenge: string;
}

export interface StageProps {
    stageNumber: number;
    title: string;
    objectives: string[];
    lastUpdated: string;
}