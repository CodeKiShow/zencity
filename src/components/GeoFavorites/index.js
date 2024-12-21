import React, { useState } from 'react';
import { MapPin, Star, Bell, Heart, MessageCircle } from 'lucide-react';

const GeoFavorites = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'proximity',
      message: 'Le Jardin des Plantes est à 200m',
      time: '2 min',
      isRead: false
    },
    {
      id: 2,
      type: 'transport',
      message: 'Bus 89 arrive dans 5 min',
      time: '1 min',
      isRead: false
    }
  ]);

  // Rest of component code...
}

export default GeoFavorites;