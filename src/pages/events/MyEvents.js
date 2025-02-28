import React, { useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";
import Event from "../components/Event";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const { data } = await axiosRes.get("/events/?attending=true");
        setEvents(data.results);
      } catch (err) {
        console.error("Error fetching my events:", err);
      }
    };
    fetchMyEvents();
  }, []);

  return (
    <div>
      <h2>Events I'm Attending</h2>
      {events.length ? (
        events.map((event) => <Event key={event.id} {...event} />)
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default MyEvents;
