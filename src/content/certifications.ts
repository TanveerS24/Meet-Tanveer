export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  description: string;
  badgeType: 'award' | 'certification';
}

export const certificationsData: Certification[] = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025 Winner",
    issuer: "Ministry of Education & Govt. of India",
    issueDate: "2025",
    description: "1st Place National Winner among 1,200+ competing engineering institutions across India for government smart tourism software.",
    badgeType: "award"
  },
  {
    id: "oracle-sql-2025",
    title: "Oracle SQL Specialist",
    issuer: "Oracle Corporation",
    issueDate: "Feb 2025",
    credentialId: "ORCL-SQL-2025-9931",
    description: "Advanced relational database architecture, query optimization, indexing strategies, and stored procedures.",
    badgeType: "certification"
  },
  {
    id: "data-science-2025",
    title: "Data Science and Analytics Professional",
    issuer: "Professional Analytics Institute",
    issueDate: "Feb 2025",
    credentialId: "DSA-PRO-2025-4812",
    description: "Statistical modeling, Python machine learning pipelines, regression techniques, and data visualization.",
    badgeType: "certification"
  }
];
