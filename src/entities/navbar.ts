export type NavbarItem = {
  title: string;
  onScroll?: boolean;
  options: Array<{
    id: string;
    title: string;
    href: string;
    onClick?: () => void;
  }>
}