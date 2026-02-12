import type { HighlightDto } from '../types';

export const mockHighlights: HighlightDto[] = [
  {
    id: '1',
    title: 'Transmission Lines',
    description: 'Total network length',
    value: '5,234 km',
    icon: 'Activity',
    trend: 'up',
    trendValue: '+124 km'
  },
  {
    id: '2',
    title: 'Active Substations',
    description: 'Operational facilities',
    value: '142',
    icon: 'BuildingOfficeIcon',
    trend: 'up',
    trendValue: '+3'
  },
  {
    id: '3',
    title: 'Grid Reliability',
    description: 'Network uptime',
    value: '99.8%',
    icon: 'ShieldCheckIcon',
    trend: 'up',
    trendValue: '+0.2%'
  },
  {
    id: '4',
    title: 'Smart Grid Coverage',
    description: 'Modernization progress',
    value: '64%',
    icon: 'Zap',
    trend: 'up',
    trendValue: '+8%'
  }
];
