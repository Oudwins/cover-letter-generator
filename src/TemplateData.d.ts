export default interface TemplateData {
  title: string;
  subtitle: string;
  companyName?: string;
  position: string;
  fullname: string;
  location: string;
  phone: string;
  email: string;
  to?: { name: string; fullname: string; location: string };
  customParagraphs?: string[];
}
