import type { HeroCarouselImageDto } from '../types';

export const mockHeroImages: HeroCarouselImageDto[] = [
  {
    id: '1',
    title: 'Powering the Nation\'s Grid',
    description: 'Reliable transmission infrastructure for Sri Lanka',
    imageUrl: 'https://images.unsplash.com/photo-1509390142526-ce3b8a07a33f?w=1200',
    order: 1
  },
  {
    id: '2',
    title: 'Smart Grid Technology',
    description: 'Advanced monitoring and control systems',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9d42e3c58a29?w=1200',
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
