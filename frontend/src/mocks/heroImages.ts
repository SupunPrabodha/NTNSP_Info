import type { HeroCarouselImageDto } from '../types';

export const mockHeroImages: HeroCarouselImageDto[] = [
  {
    id: '1',
    title: 'Powering the Nation\'s Grid',
    description: 'Reliable transmission infrastructure for Sri Lanka',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
    order: 1
  },
  {
    id: '2',
    title: 'Smart Grid Technology',
    description: 'Advanced monitoring and control systems',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    order: 2
  },
  {
    id: '3',
    title: 'Building Tomorrow\'s Infrastructure',
    description: 'Expanding and modernizing transmission networks',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200',
    order: 3
  }
];
