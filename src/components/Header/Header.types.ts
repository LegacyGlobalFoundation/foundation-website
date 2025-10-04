import { NavigationItem } from '../Navigation/Navigation.types';

export interface HeaderProps {
  navigationItems: NavigationItem[];
  activeSection?: string;
  onNavigationClick?: (item: NavigationItem) => void;
}