/**
 * A component that renders a list of documents.
 *
 * @component
 * @param {DocumentListProps} props - The props for the DocumentList component.
 * @param {DocumentItem[]} props.documents - An array of document items to be displayed.
 *
 * @example
 * const documents = [
 *   { title: 'Document 1' },
 *   { title: 'Document 2' }
 * ];
 *
 * <DocumentList documents={documents} />
 *
 * @returns {JSX.Element} A JSX element representing the list of documents.
 */
import { DocumentItem } from "@/types";
import Image from "next/image";

interface DocumentListProps {
  documents: DocumentItem[];
}

export function DocumentList({ documents }: DocumentListProps) {
  return (
    <div className="flex flex-col mt-6 w-full text-sm leading-none text-indigo-800">
      {documents.map((doc, index) => (
        <div key={index} className="flex gap-3 items-center mt-3 w-full">
          <Image
            loading="lazy"
            src={`/square-arrow-up-right.svg`}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            width={16}
            height={16}
          />
          <div className="flex-1 shrink self-stretch my-auto basis-0">
            {doc.title}
          </div>
        </div>
      ))}
    </div>
  );
}
