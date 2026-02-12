import type { QuickLinkDto } from '../types';

export const mockQuickLinks: QuickLinkDto[] = [
  {
    id: '1',
    title: 'Grid Status',
    description: 'Real-time transmission network monitoring',
    url: '/grid',
    icon: 'Activity',
    category: 'Operations'
  },
  {
    id: '2',
    title: 'Network Analytics',
    description: 'Performance metrics and analytics',
    url: '/analytics',
    icon: 'ChartBarIcon',
    category: 'Analytics'
  },
  {
    id: '3',
    title: 'Maintenance Log',
    description: 'Track and schedule maintenance',
    url: '/maintenance',
    icon: 'Cog6ToothIcon',
    category: 'Operations'
  },
  {
    id: '4',
    title: 'Safety Protocols',
    description: 'Access safety guidelines',
    url: '/safety',
    icon: 'ShieldCheckIcon',
    category: 'Safety'
  },
  {
    id: '5',
    title: 'Employee Portal',
    description: 'HR and personnel services',
    url: '/employee',
    icon: 'UserIcon',
    category: 'HR'
  },
  {
    id: '6',
    title: 'Training Hub',
    description: 'Technical training and certification',
    url: '/training',
    icon: 'AcademicCapIcon',
    category: 'Learning'
  },
  {
    id: '7',
    title: 'Documentation',
    description: 'Technical specs and manuals',
    url: '/docs',
    icon: 'DocumentTextIcon',
    category: 'Resources'
  },
  {
    id: '8',
    title: 'Project Tracker',
    description: 'Infrastructure project status',
    url: '/projects',
    icon: 'BuildingOfficeIcon',
    category: 'Projects'
  }
];
