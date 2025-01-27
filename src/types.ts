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
    /**
     * The title of the project.
     */
    title: string;

    /**
     * The organization associated with the project.
     */
    organization: string;

    /**
     * The location where the project is based.
     */
    location: string;

    /**
     * The timeline of the project.
     */
    timeline: string;

    /**
     * A brief description of the project.
     */
    description: string;

    /**
     * An array of documents related to the project.
     */
    documents: DocumentItem[];
}