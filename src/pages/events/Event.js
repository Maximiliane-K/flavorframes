import React, { useState, useEffect } from "react";
import styles from "../../styles/Event.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
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
    initialStatus,
    initialAttendingCount = 0,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const [status, setStatus] = useState(initialStatus);
  const [attendingCount, setAttendingCount] = useState(initialAttendingCount);
  const [attendingUsers, setAttendingUsers] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        if (!currentUser) return;

        const { data } = await axiosRes.get(`/attendance/?event=${id}`);
        setAttendingUsers(data.attending);
        setAttendingCount(data.attending_count);

        const userAttendance = data.attending.find(user => user.user === currentUser?.username);
        setStatus(userAttendance ? "attending" : null);

      } catch (err) {
        //console.log(err);
      }
    };
    fetchAttendance();
  }, [id, currentUser]);

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      //console.log(err);
    }
  };

  const handleAttendance = async () => {
    try {
      let response;
      let updatedAttendingUsers = [...attendingUsers];

      if (status === "attending") {
        setStatus(null);
        setAttendingUsers(updatedAttendingUsers.filter(user => user.user !== currentUser.username));
        setAttendingCount(prevCount => Math.max(prevCount - 1, 0));

        response = await axiosRes.delete(`/attendance/${id}/`);
      } else {
        setStatus("attending");
        const newUser = { user: currentUser.username, profile_image: currentUser.profile_image };
        setAttendingUsers([...updatedAttendingUsers, newUser]);
        setAttendingCount(prevCount => prevCount + 1);

        response = await axiosRes.post(`/attendance/`, { event: id, status: "attending" });
      }

      if (response && response.data) {
        setAttendingCount(response.data.attending_count);
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
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
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
        
        {currentUser && (
          <div>
            <button
              className={`${btnStyles.Button} ${status === "attending" ? btnStyles.Active : ""}`}
              onClick={handleAttendance}
            >
              {status === "attending" ? (
                <>
                  <i className="fas fa-check-circle"></i> Attending ({attendingCount || 0})
                </>
              ) : (
                <>
                  <i className="fas fa-plus-circle"></i> Attend ({attendingCount || 0})
                </>
              )}
            </button>
          </div>
        )}
      </Card.Body>

      {currentUser && (
        <Card.Body>
          <h6>Attending:</h6>
          <div className={styles.UserList}>
            {attendingUsers.length > 0 ? (
              attendingUsers.slice(0, 3).map((user) => (
                <Avatar key={user.id} src={user.profile_image} height={40} />
              ))
            ) : (
              <p>No one attending yet</p>
            )}
          </div>
        </Card.Body>
      )}
    </Card>
  );
};

export default Event;
