import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UpdateCard from '../UpdateCard';

describe('UpdateCard', () => {
  it('renders check-in update correctly', () => {
    const update = {
      id: '1',
      type: 'checkin',
      time: '8:30 AM',
      note: 'Emma arrived happy!',
      staffName: 'Sarah Johnson',
    };

    render(<UpdateCard update={update} />);

    expect(screen.getByText('Check In')).toBeInTheDocument();
    expect(screen.getByText('8:30 AM')).toBeInTheDocument();
    expect(screen.getByText('Emma arrived happy!')).toBeInTheDocument();
    expect(screen.getByText('— Sarah Johnson')).toBeInTheDocument();
  });

  it('renders meal update with items', () => {
    const update = {
      id: '2',
      type: 'meal',
      time: '12:00 PM',
      meal: 'Lunch',
      items: ['Pasta', 'Salad', 'Fruit'],
      consumed: 'All',
      note: 'Great appetite!',
    };

    render(<UpdateCard update={update} />);

    expect(screen.getByText('Lunch')).toBeInTheDocument();
    expect(screen.getByText('Pasta')).toBeInTheDocument();
    expect(screen.getByText('Salad')).toBeInTheDocument();
    expect(screen.getByText('Fruit')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('renders activity update with learning outcomes', () => {
    const update = {
      id: '3',
      type: 'activity',
      time: '10:30 AM',
      title: 'Art Class',
      description: 'Painting session',
      learningOutcomes: ['Creativity', 'Fine motor skills'],
    };

    render(<UpdateCard update={update} />);

    expect(screen.getByText('Art Class')).toBeInTheDocument();
    expect(screen.getByText('Painting session')).toBeInTheDocument();
    expect(screen.getByText('Creativity')).toBeInTheDocument();
    expect(screen.getByText('Fine motor skills')).toBeInTheDocument();
  });

  it('renders nap update correctly', () => {
    const update = {
      id: '4',
      type: 'nap',
      time: '1:00 PM',
      duration: '2 hours',
      quality: 'Good',
      note: 'Slept peacefully',
    };

    render(<UpdateCard update={update} />);

    expect(screen.getByText('Nap Time')).toBeInTheDocument();
    expect(screen.getByText('2 hours')).toBeInTheDocument();
    expect(screen.getByText('Good')).toBeInTheDocument();
  });
});