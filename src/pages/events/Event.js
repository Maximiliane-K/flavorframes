import React, { useState, useEffect } from "react";
import styles from "../../styles/Event.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    description,
    event_date,
    category,
    image,
    updated_at,
    eventPage,
    setEvents,
    initialStatus,
    initialAttendingCount = 0,
    initialInterestedCount = 0,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const [status, setStatus] = useState(initialStatus);
  const [attendingCount, setAttendingCount] = useState(initialAttendingCount);
  const [interestedCount, setInterestedCount] = useState(
    initialInterestedCount
  );
  const [attendingUsers, setAttendingUsers] = useState([]);
  const [interestedUsers, setInterestedUsers] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axiosRes.get(`/attendance/?event=${id}`);
        setAttendingUsers(data.attending);
        setInterestedUsers(data.interested);
        setAttendingCount(data.attending_count);
        setInterestedCount(data.interested_count);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAttendance();
  }, [id]);

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttendance = async () => {
    try {
      let response;
      let updatedAttendingUsers = [...attendingUsers];

      if (status === "attending") {
        response = await axiosRes.delete(`/attendance/${id}/`);
        setStatus(null);
        updatedAttendingUsers = updatedAttendingUsers.filter(
          (user) => user.user !== currentUser.username
        );
      } else {
        response = await axiosRes.post(`/attendance/`, {
          event: id,
          status: "attending",
        });
        setStatus("attending");

        const newUser = {
          user: currentUser.username,
          profile_image: currentUser.profile_image,
        };
        updatedAttendingUsers = [...updatedAttendingUsers, newUser];
      }

      if (response && response.data) {
        setAttendingUsers(updatedAttendingUsers);
        setAttendingCount(
          response.data.attending_count || updatedAttendingUsers.length
        );
      }
    } catch (err) {
      console.error("Error in handleAttendance:", err);
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className={styles.Username}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>

      <Card.Body>
        <h5 className="text-center">{title}</h5>
        <div>
          <span>
            <i className="fas fa-calendar-alt"></i> {event_date}
          </span>
          <span>
            <i className="fas fa-layer-group"></i> {category}
          </span>
        </div>
      </Card.Body>

      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>

      <Card.Body>
        {description && <Card.Text>{description}</Card.Text>}
        <div>
          <button
            className={`${btnStyles.Button} ${
              status === "attending" ? btnStyles.Active : ""
            }`}
            onClick={handleAttendance}
          >
            {status === "attending" ? (
              <>
                <i className="fas fa-check-circle"></i> Attending (
                {attendingCount || 0})
              </>
            ) : (
              <>
                <i className="fas fa-plus-circle"></i> Attend (
                {attendingCount || 0})
              </>
            )}
          </button>
        </div>
      </Card.Body>

      <Card.Body>
        <h6>Attending:</h6>
        <div className={styles.UserList}>
          {attendingUsers.length > 0 ? (
            attendingUsers
              .slice(0, 3)
              .map((user) => (
                <Avatar key={user.id} src={user.profile_image} height={40} />
              ))
          ) : (
            <p>No one attending yet</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
