export const mockChild = {
  id: '1',
  firstName: 'Emma',
  lastName: 'Appleton',
  age: 3,
  room: 'Butterflies',
  photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
};

export const mockUpdates = [
  {
    id: '1',
    type: 'checkin',
    timestamp: '2025-01-20T08:30:00',
    time: '8:30 AM',
    note: 'Emma arrived happy and ready to play! She brought her favorite teddy bear today.',
    staffName: 'Sarah Johnson',
  },
  {
    id: '2',
    type: 'meal',
    timestamp: '2025-01-20T09:15:00',
    time: '9:15 AM',
    meal: 'Morning Tea',
    items: ['Apple slices', 'Cheese cubes', 'Crackers', 'Water'],
    consumed: 'Most',
    note: 'Emma enjoyed her morning tea and asked for more cheese!',
  },
  {
    id: '3',
    type: 'activity',
    timestamp: '2025-01-20T10:30:00',
    time: '10:30 AM',
    title: 'Outdoor Play',
    description: 'Emma spent time in the sandpit practicing her pouring and scooping skills. She worked cooperatively with two other children to build a sandcastle.',
    photos: [
      'https://images.unsplash.com/photo-1587616211892-76d2f8f94f8c?w=800',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    ],
    learningOutcomes: ['Fine motor skills', 'Social interaction', 'Creative play'],
  },
  {
    id: '4',
    type: 'nap',
    timestamp: '2025-01-20T12:45:00',
    time: '12:45 PM',
    duration: '1 hour 45 minutes',
    quality: 'Good',
    note: 'Emma settled quickly and had a peaceful sleep.',
  },
  {
    id: '5',
    type: 'meal',
    timestamp: '2025-01-20T11:30:00',
    time: '11:30 AM',
    meal: 'Lunch',
    items: ['Spaghetti bolognese', 'Garden salad', 'Garlic bread', 'Milk'],
    consumed: 'All',
    note: 'Emma ate all her lunch today! She particularly enjoyed the spaghetti.',
  },
  {
    id: '6',
    type: 'activity',
    timestamp: '2025-01-20T15:00:00',
    time: '3:00 PM',
    title: 'Art & Craft',
    description: 'Emma created a beautiful painting using her fingers. She explored color mixing and talked about the colors she was creating.',
    photos: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800'],
    learningOutcomes: ['Creative expression', 'Color recognition', 'Fine motor skills'],
  },
  {
    id: '7',
    type: 'meal',
    timestamp: '2025-01-20T14:30:00',
    time: '2:30 PM',
    meal: 'Afternoon Tea',
    items: ['Banana', 'Rice crackers', 'Yogurt', 'Water'],
    consumed: 'Most',
  },
];

export const mockParent = {
  email: 'parent@saplingdemo.com',
  password: 'sapling321!',
  name: 'Terry Appleton',
  role: 'parent',
};

export const mockEducator = {
  email: 'educator@saplingdemo.com',
  password: 'sapling123!',
  name: 'Sarah Johnson',
  role: 'educator',
};

export const mockUsers = [mockParent, mockEducator];