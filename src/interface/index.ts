export interface Links {
  name: string;
  href: string;
  id: string;
  icon: string;
  bg: string;
}

export type ProjectInfo = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};
