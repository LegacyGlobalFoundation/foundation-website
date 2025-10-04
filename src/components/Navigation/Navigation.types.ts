export interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  activeSection?: string;
  onItemClick?: (item: NavigationItem) => void;
  className?: string;
}