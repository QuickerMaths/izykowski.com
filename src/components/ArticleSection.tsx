import { ReactNode } from "react";

interface ArticleSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

const ArticleSection = ({ id, title, children }: ArticleSectionProps) => {
  return (
    <div className="mb-8">
      <h4 id={id} className="text-2xl font-bold mb-4 text-gray-800">
        {title}
      </h4>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

interface BulletPointProps {
  children: ReactNode;
}

const BulletPoint = ({ children }: BulletPointProps) => (
  <li className="mb-2 flex items-start">
    <span className="text-blue-600 mr-2">•</span>
    <span>{children}</span>
  </li>
);

interface CartinationItemProps {
  children: ReactNode;
}

const ContraindicationItem = ({ children }: CartinationItemProps) => (
  <li className="mb-3">{children}</li>
);

interface SubListProps {
  children: ReactNode;
}

const SubList = ({ children }: SubListProps) => (
  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">{children}</ul>
);

export { ArticleSection, BulletPoint, ContraindicationItem, SubList };
