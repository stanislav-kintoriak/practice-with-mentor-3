import { fetchEventById } from '../services/eventsApi';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

export const useFetchEvent = () => {
  const [event, setEvents] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvents);
  }, [id]);

  return event;
};
