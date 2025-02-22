import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));

        if (pageProfile?.owner) {
          const { data: profilePosts } = await axiosReq.get(
            `/posts/?owner__username=${pageProfile.owner}` 
          );
          setProfilePosts(profilePosts);
        }

        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
}, [id, setProfileData]);


  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row
        noGutters
        className="px-3 text-center d-flex flex-column align-items-center"
      >
        <Image
          className={styles.ProfileImage}
          roundedCircle
          src={profile?.profile_image}
        />

        <h3 className="mt-3">{profile?.owner}</h3>

        {currentUser && !is_owner && (
          <Button
            className={`${btnStyles.Button} ${
              profile?.following_id ? btnStyles.BlackOutline : btnStyles.Black
            } mt-2`}
            onClick={() =>
              profile?.following_id
                ? handleUnfollow(profile)
                : handleFollow(profile)
            }
          >
            {profile?.following_id ? "Unfollow" : "Follow"}
          </Button>
        )}

        {profile?.city && (
          <p className="d-flex align-items-center text-muted mt-3">
            <i className="fa-solid fa-location-dot me-2"></i> {profile.city}
          </p>
        )}

        <Row className="justify-content-center mt-3 w-100">
          <Col xs={3} className="text-center">
            <strong>{profile?.posts_count}</strong>
            <div>posts</div>
          </Col>
          <Col xs={3} className="text-center">
            <strong>{profile?.followers_count}</strong>
            <div>followers</div>
          </Col>
          <Col xs={3} className="text-center">
            <strong>{profile?.following_count}</strong>
            <div>following</div>
          </Col>
        </Row>

        {profile?.about && (
          <Col className="mt-4 px-3">
            <p className="text-center">{profile.about}</p>
          </Col>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
