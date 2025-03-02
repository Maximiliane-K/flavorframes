<h1  align="center">FlavorFrames</h1>

This is the readme for the FlavorFrames project's frontend. For more information about the backend, please visit [this link](https://github.com/Maximiliane-K/flavorframes_drf_api).

FlavorFrames is a social platform designed for food lovers to share and discover restaurants, cafes, and culinary experiences through images and links. The name FlavorFrames represents the fusion of flavors and visuals, allowing users to frame and showcase their favorite dining experiences.

The interactive platform enables users to upload and explore food-related content while engaging with others who share similar tastes. 

The interface adapts based on user authentication states. Unregistered users can browse restaurants, cafes, and food posts shared by others.
Registered users can create and personalize their profiles, upload photos, mark themselves attending events, and interact with posts by liking and commenting.
FlavorFrames is built to foster a vibrant community where users can discover new dining spots, share recommendations, and visually document their food journeys.

View the live project [here](https://flavorframes-ec3ead3959ab.herokuapp.com/). 

![Responsive Mockup](https://res.cloudinary.com/maxiscloud/image/upload/v1740907123/Screenshot_2025-03-02_at_10.18.31_eay4i8.png)

## Table of Contents
- [User Experience Design](#user-experience-design)
	 -   [The Strategy Plane](#the-strategy-plane)
		   -   [Project Objective](#project-objective)
		    -   [Agile Project Management](agile-project-management)
		    -   [User Stories](#user-stories)
	-   [The Structure Plane](#the-structure-plane)
		-   [Project Structure](#project-structure)
	    -   [Features](#features)
	    -   [Future Features](#future-features)
	-   [The Skeleton Plane](#the-skeleton-plane)
	    -   [Wireframes](#wireframes)
	-   [The Surface Plane](#the-surface-plane)
	    -   [Design](#design)
-   [Technologies](#technologies)
-   [Testing](#testing)
-   [Deployment](#deployment)
-   [Credits](#credits)

## User Experience Design

## The Strategy Plane

### Project Objective

The objective of this project is to build a content-sharing web application for food enthusiasts, enabling users to discover, share, and engage with culinary experiences. 
The platform allows users to explore restaurants, cafes, and food-related posts while interacting with a like-minded community.

Users can view, create, edit, delete, like, and comment on food posts, as well as mark themselves as attending food-related events. 
Content is displayed in a structured way with filtering options for better discoverability. 
Additionally, users can create and customize their profiles, follow other users, and engage with shared content to foster a vibrant and interactive food-loving community.

<br><br>

### Agile Project Management

This project followed agile methodologies, with features developed and delivered in small increments across four sprints. A Kanban board was set up using GitHub Projects and used as a project management tool to track progress, keep work organized, and maintain an efficient workflow. You can view the Kanban board [here](https://github.com/users/Maximiliane-K/projects/14). 

Acceptance criteria were defined for each user story, which was then grouped into one of seven epics.
User stories were organized within sprints and prioritized using a structured approach—starting with must-have features. 
This method ensured that all core functionalities were delivered first, while additional features were implemented iteratively based on available capacity.

![Image of Kanban](https://res.cloudinary.com/maxiscloud/image/upload/v1738670509/kanban-board-flavorframes_rbfw70.png)

![Image of Project Board](https://res.cloudinary.com/maxiscloud/image/upload/v1738671974/project-board-flavorframes_gxdwvx.png)

<br><br>

### User Stories

#### Navigation & Authentication
- US01. Navigation:
As a user, I can view a navigation bar on every page so that I can easily navigate between different sections of the app.

- US02. Routing:
As a user, I can move between pages quickly so that I can view content seamlessly without needing a page refresh.

- US03. Authentication - Sign Up:
As a user, I can create a new account so that I can access all features available to registered users.

- US04. Authentication - Sign In:
As a user, I can log into the app so that I can access functionality exclusive to logged-in users.

- US05. Authentication - Logged-In Status:
As a user, I can see whether I am logged in or not so that I know when I need to sign in.

- US06. Authentication - Refreshing Access Tokens:
As a user, I can stay logged in until I choose to log out so that my session remains active without disruption.

- US07. Navigation - Conditional Rendering:
As a logged-out user, I can see sign-in and sign-up options so that I can create an account or log in when needed.

- US08. Avatar:
As a user, I can see other users' avatars (profile pictures) so that I can easily identify members of the platform.

<br><br>

#### Posts

- US09. Create Posts:
As a logged-in user, I can create posts so that I can share my content.

- US10. Edit Post:
As a post owner, I can edit the text and image of my post so that I can make updates or corrections after posting.

- US11. Delete a Post:
As a post owner, I can delete my post so that it is no longer visible on the platform.

- US12. View a Post:
As a user, I can view the details of a single post so that I can learn more about it.

- US13. Posts List:
As a user, I can see a list of posts ordered by the most recent first so that I can stay up to date with new content.

- US14. View Posts from Followed Users:
As a logged-in user, I can see posts from users I follow so that I can keep up with their content.

<br><br>

#### Profiles
- US15. View Profiles:
As a user, I can view other users' profiles so that I can see their posts and events, learn more about them through their stats (number of posts, events, followers, and following), and read the information they’ve shared about themselves.

- US16. Most Followed Profiles:
As a user, I can see a list of the most followed profiles so that I can discover popular users on the platform.

- US17. Follow/Unfollow a User:
As a logged-in user, I can follow and unfollow other users so that I can control whose posts appear in my feed.

- US18. View All Posts by a Specific User:
As a user, I can view all posts from a specific user so that I can catch up on their content or decide if I want to follow them.

- US19. View Events by a Specific User:
As a user, I can see all events created by a specific user so that I can explore their events or decide if I want to follow them.

- US20. View Events I'm Attending:
As a logged-in user, I can see a list of events I’m attending so that I can keep track of my upcoming plans.

- US21. Edit Profile:
As a logged-in user, I can update my profile details, including my profile picture, bio, and location, so that I can keep my information up to date.

- US22. Update Username and Password:
As a logged-in user, I can change my username and password so that I can update my display name and keep my account secure.

<br><br>

#### Comments
US23. Create a Comment:
As a logged-in user, I can add comments to a post so that I can share my thoughts about it.

US24. Comment Date:
As a user, I can see how long ago a comment was made so that I know when it was posted.

US25. View Comments:
As a user, I can read comments on posts so that I can see what other users think about them.

US26. Delete a Comment:
As the owner of a comment, I can delete my comment so that I can remove it from the platform.

US27. Edit a Comment:
As the owner of a comment, I can edit my comment so that I can update or correct it.

<br><br>

#### Likes
- US28. Like a Post:
As a logged-in user, I can like a post so that I can show interest and that I like it.

- US29. Unlike a Post:
As a logged-in user, I can unlike a post so that I can change my mind about which posts I support.

- US30. View Liked Posts:
As a logged-in user, I can see a list of posts I’ve liked so that I can find them easily later.

<br><br>

#### Events
- US30. Create an Event:
As a logged-in user, I can create events so that I can share upcoming events with others.

- US31. Edit an Event:
As the owner of an event, I can edit its details so that I can make updates or corrections after creating it.

- US32. Delete an Event:
As the owner of an event, I can delete it so that it is no longer listed on the platform.

- US33. View All Events:
As a user, I can see a list of all events so that I can explore upcoming and past events on the platform.

- US34. View a Single Event:
As a user, I can view the full details of an event so that I can learn more about it.

- US35. Filter Events I’m Attending:
As a user, I can filter events to only see the ones I have marked myself as attending.

- US36. Search Events:
As a user, I can search for events so that I can quickly find specific ones of interest.

- US37. View Events from Followed Users:
As a logged-in user, I can see events created by users I follow so that I can stay updated on what they are organizing or attending.

- US37. Filter Events I’m Attending:
As a user, I can filter events to only see the ones I have marked myself as attending.

- US38. Search Events and Mark Attendance:
As a user, I can search for events so that I can quickly find specific ones of interest and mark myself as attending them.

- US39. View Events from Followed Users and Manage Attendance:
As a logged-in user, I can see events created by users I follow so that I can stay updated on what they are organizing or attending, and I can mark or remove my attendance from these events.

<br><br>

## The Structure Plane

### Project Structure

FlavorFrames renders content differently based on user authentication. 
The platform adapts depending on whether a user is logged out or logged in, which determines content visibility and available actions.

Logged-Out Users
When a user is logged out, they have limited access to the platform. 

The following pages are available from the navigation menu:

- Discover: A public feed displaying food-related posts and events.
- Sign In / Sign Up: Options for users to register or log in.

Logged-In Users
Once logged in, users gain access to additional pages and features:

- Feed: A personalized feed displaying posts from followed users and events the user is attending.
- Profile Page: The ability to view and edit their own profile.
- Add Event: An option to create and share new events.
- Add Post: An option to create and share new food-related posts.
- Sign Out: An option to log out of the platform.

Actions Available Only to Logged-In Users
Logged-in users have additional functionality that enhances their interaction with the platform, including the ability to:

- Create, edit, and delete posts and events.
- Like and unlike posts.
- Follow and unfollow users.
- Mark themselves as attending events and cancel attendance.
- Edit their profile, including profile picture, bio, and location.
- Update their username and password.
- View a personalized feed based on followed users and events they are attending.

<br><br>

### Features

#### Navigation

Navigation
FlavorFrames features a navigation bar designed for an intuitive user experience. 
It dynamically adapts based on the user's authentication status and ensures seamless access to key areas of the platform. 
On tablet and mobile devices, the navigation transforms into a hamburger menu for a compact and responsive design.

Navigation for Logged-Out Users
When a user is logged out, the navigation bar includes:

- FlavorFrames Logo: Always visible and links back to the homepage.
- Discover: A dropdown menu allowing users to browse all posts and events shared on the platform.
- Sign In / Sign Up: Quick access to authentication forms for logging in or registering an account.
- Navigation for Logged-In Users

![NavBar logged out](https://res.cloudinary.com/maxiscloud/image/upload/v1740897918/Screenshot_2025-03-02_at_07.41.49_iss1pj.png)

Once logged in, users gain access to additional menu options:

- Feed: A personalized feed displaying posts from followed users and events the user is attending.
- Liked: A dedicated section where users can view all posts they have liked.
- Profile Page: A dedicated page where users can view and edit their profile.
- Add Event: An option to create and share new events.
- Add Post: An option to create and share new food-related posts.
- Sign Out: A button to securely log out of the platform.

![NavBar logged in - tablet](https://res.cloudinary.com/maxiscloud/image/upload/v1740898015/Screenshot_2025-03-02_at_07.46.08_fi7yxr.png)
  
The adaptive navigation bar ensures that users can effortlessly navigate between features, keeping the platform intuitive and user-friendly.

<br><br>

#### Authentication

FlavorFrames uses a secure authentication system that determines user access and available actions. 
Logged-out users can browse public content, while logged-in users gain full platform functionality.
The standard dj-rest/auth/registration user account signup process was used for this. 

Sign Up: Users can create an account by providing a username,password, and confirming their password. 

![SignUpForm](https://res.cloudinary.com/maxiscloud/image/upload/v1740898540/Screenshot_2025-03-02_at_07.55.17_gli5zd.png)

Sign In: Registered users can log in using their credentials to access personalized features.

![SignInForm](https://res.cloudinary.com/maxiscloud/image/upload/v1740898540/Screenshot_2025-03-02_at_07.55.28_migkaf.png)

To sign out, signed in users can access the Sign Out option in the Navigation Bar.

<br><br>

#### Homepage

There are three main react components which make up the website Homepage:

1.  Popular Profiles Component
2.  Posts
3.  Search

***

- #### Popular Profiles Component

The popular profiles component is a site-wide feature that appears on the right side of all pages on large screens and at the top of pages on smaller screens. 
This component ranks users based on their follower count, displaying them in order from highest to lowest. 
On larger screens, the top 10 profiles are shown, while on smaller screens, only the top 4 are displayed.

![Popular profiles logged out](https://res.cloudinary.com/maxiscloud/image/upload/v1740899010/Screenshot_2025-03-02_at_08.02.01_vpwtj7.png)

If a user is not logged in, they can see the profile avatar and username of each listed profile. 
When a user is logged in, they also have access to a follow/unfollow button next to each profile, allowing them to manage their connections. 
Additionally, every profile avatar is clickable, redirecting users to the full profile page of that user.

![Popular profiles logged in](https://res.cloudinary.com/maxiscloud/image/upload/v1740899010/Screenshot_2025-03-02_at_07.59.14_syidyj.png)

***

- #### Homepage and Post
The Homepage (also referred to as the Posts page) is the central feed where all user-created posts are displayed.

![Homepage](https://res.cloudinary.com/maxiscloud/image/upload/v1740899948/Screenshot_2025-03-02_at_08.14.52_x9kaut.png)

Post Display & Ordering
- Every post created on the platform is displayed on the Homepage.
- Posts are ordered by creation date, with the most recent posts appearing at the top.
- Clicking on the post image redirects users to the individual post page.

- #### Post Details

Each post contains the following information:

- User who created the post, including their profile avatar and username.
- Date of creation to indicate when the post was shared.
- Description provided by the user.
- Link to the establishment (restaurant, café, or food spot).
- Image representing the post’s content.

![Post](https://res.cloudinary.com/maxiscloud/image/upload/v1740899948/Screenshot_2025-03-02_at_08.18.52_do5h39.png)
  
- Engagement Features
  - Posts display the count of likes and comments, allowing users to see engagement levels.

The Homepage ensures that fresh content is always accessible, making it the main hub for discovering and engaging with food experiences shared by the FlavorFrames community.

The Posts Page can be accessed through the "Discover" dropdown in the Navigation Bar.

***

- #### Search
The search bar allows users to quickly find posts, events, and users by entering relevant keywords. 
It helps users discover specific content without scrolling through the entire feed, making navigation faster and more efficient.

![Search bar](https://res.cloudinary.com/maxiscloud/image/upload/v1740900249/Screenshot_2025-03-02_at_08.23.06_yapjhw.png)

<br><br>

### Events Page

The Events Page follows a similar structure as the Posts Page, sharing a consistent layout and key components.

The Events Page is built using three main React components:

- Popular Profiles Component
- Event Component
- Search Component
  
Both pages are designed for seamless browsing and interaction, ensuring a consistent user experience across the platform.

***

- #### Event

The Event Component represents individual event listings and ensures users can easily explore and interact with upcoming events. 

Each event card includes:

- Event title and short description to provide an overview of the event
- Date of the event
- Event category to help users identify the type of event
- User who created the event, including their profile avatar and username
- Mark as Attending button for logged-in users to join or remove their attendance
- Engagement metrics displaying the number of attendees

![Event card](https://res.cloudinary.com/maxiscloud/image/upload/v1740900953/Screenshot_2025-03-02_at_08.35.22_ugq0a5.png)

Clicking on the event title or image redirects users to the event details page.

The Event Component ensures that events are displayed in a visually consistent way, making it easy for users to discover and participate in relevant gatherings.

Events are fetched from the API and ordered by their creation date, with the most recently created events appearing at the top in descending order. 
This ensures that users always see the latest events first.

<br><br>

### Feed

The Feed Page can be accessed through the "Feed" dropdown in the Navigation Bar. 

![Feed](https://res.cloudinary.com/maxiscloud/image/upload/v1740901562/Screenshot_2025-03-02_at_08.42.21_zae20y.png)

It provides a personalized experience by displaying:

- Posts from followed users, allowing users to keep up with their favorite creators.
- Events the user is attending, providing quick access to upcoming plans.
  
The Feed Page helps users engage with relevant content, making it easy to explore and interact with posts and events that matter most to them.

<br><br>

### Create a Post

Logged-in users can create new posts that will be published on the Posts Page.  
By selecting "Add Post" from the Navigation Bar, users are directed to the Create Post form, where they can submit their content to the API.  

Post Creation Process  
- All fields in the form are mandatory, and an image upload is required for successful submission.
- Once submitted, users are automatically redirected to the newly created post page to view their published post.
- Each time a user creates a post, their post count increases on their profile stats, allowing others to see how active they are on the platform.

![Create post](https://res.cloudinary.com/maxiscloud/image/upload/v1740902407/Screenshot_2025-03-02_at_08.59.57_d0m4ct.png)
  
The Create Post feature ensures a seamless experience for sharing food-related content while tracking user engagement within the community.

<br><br>

### Create an Event

Logged-in users can create new events that will be published on the Events Page.  
By selecting "Add Event" from the Navigation Bar, users are directed to the Create Event form, where they can submit event details to the API.  

Event Creation Process
- All fields in the form are mandatory, including the event title, date, image, category, and description.
- Once submitted, users are automatically redirected to the newly created event page to view their published event.
- Each time a user creates an event, their event count increases on their profile stats, allowing others to see how active they are in organizing events.

![Create event](https://res.cloudinary.com/maxiscloud/image/upload/v1740902590/Screenshot_2025-03-02_at_09.02.51_ypxlik.png)

The Create Event feature makes it easy for users to share and promote events while tracking their engagement within the FlavorFrames community.

<br><br>

### Post Page

The Post Page displays all the details and comments for a specific post.  
Users can access this page by clicking on the post image or comment icon on any post in the Posts Page or Feed Page.  

Post Details & Actions  

Each post on this page includes:

![Post detail](https://res.cloudinary.com/maxiscloud/image/upload/v1740904017/Screenshot_2025-03-02_at_09.25.22_ugexcf.png)

- Post image
- Description written by the post owner
- Creation date of the post
- User who created the post, including their profile avatar and username
- Number of likes and comments
  
If the user is the owner of the post, they have additional options:

![Post owner](https://res.cloudinary.com/maxiscloud/image/upload/v1740904017/Screenshot_2025-03-02_at_09.26.12_kgpkkr.png)

- A three-dot menu next to the post creation date allows them to edit or delete the post.
- Clicking Edit redirects them to the Post Edit Form, where the fields are pre-filled with the existing content, allowing them to make updates and save changes.
- Clicking Delete removes the post from the API, making it no longer visible on the platform.
   The user is then redirected to the Post Create Form, where they can create a new post if they choose.

![PostEditForm](https://res.cloudinary.com/maxiscloud/image/upload/v1740904060/Screenshot_2025-03-02_at_09.27.29_dilgm3.png)
  
Comments Section  

Below the post details, users can find the comments section:

![Comment section](https://res.cloudinary.com/maxiscloud/image/upload/v1740904017/Screenshot_2025-03-02_at_09.26.34_vshv4b.png)

- If no comments exist, a message is displayed informing users that there are no comments yet.
- Logged-out users can view all existing comments but cannot add their own.
- Logged-in users will see a comment form above the existing comments, allowing them to write and submit their own thoughts about the post.
  
The Post Page creates an interactive space for users to engage with content, share opinions, and participate in discussions around food experiences.

<br><br>

### Event Page

The Event Page displays all the details and attendees for a specific event.  
Users can access this page by clicking on an event card from the Events Page or Feed Page.  

Event Details & Actions  

Each event includes:

![Event detail](https://res.cloudinary.com/maxiscloud/image/upload/v1740904776/Screenshot_2025-03-02_at_09.31.21_eyipai.png)

- Event title and description to provide an overview of the event.
- Event date and category to specify when and what type of event it is.
- User who created the event, including their profile avatar and username.
- Number of attendees, showing how many users have marked themselves as attending.
- Mark as Attending button, allowing logged-in users to join or remove their attendance.  

If the user is the event creator, they have additional options:

![Event owner](https://res.cloudinary.com/maxiscloud/image/upload/v1740904776/Screenshot_2025-03-02_at_09.31.29_nm4woc.png)

- A three-dot menu next to the event details provides options to edit or delete the event.
- Clicking Edit redirects them to the Event Edit Form, where the fields are pre-filled with existing details for easy updates.
- Clicking Delete removes the event from the API, making it no longer visible on the platform.
   The user is then redirected to the Event Create Form to create a new event if they choose.

![EventEditForm](https://res.cloudinary.com/maxiscloud/image/upload/v1740904777/Screenshot_2025-03-02_at_09.31.36_vl0htj.png)

Attendance Section  

Below the event details, users will find the attendance section,  
which displays information about attendees and provides an option to join or leave the event:

![Attendance section](https://res.cloudinary.com/maxiscloud/image/upload/v1740904779/Screenshot_2025-03-02_at_09.31.48_plavm1.png)

- Mark as Attending button – Logged-in users can click this button to join or remove their attendance.
- Attendee count – Shows the total number of users attending the event.
- Attendee avatars – If users are attending, their profile avatars are displayed.
- No attendees message – If no one has marked themselves as attending,
 a message is displayed informing users that there are no attendees yet.

The attendance section provides a clear and interactive way for users to see who is attending and easily join the event.

<br><br>

### Profile Page

The Profile Page displays a user's personal information, posts, events, and social connections,  
allowing them to manage their content and engagement on the platform.  
Users can access this page by clicking on their profile avatar in the Navigation Bar or by selecting another user's profile  
from a post, event, or the Popular Profiles section.  

Profile Page Features  
Each profile includes:

![Post detail](https://res.cloudinary.com/maxiscloud/image/upload/v1740906927/Screenshot_2025-03-02_at_10.15.00_aenmnr.png)

- Profile avatar and username
- User short introduction and location
- Post and event statistics, showing the number of posts and events they have created
- Follower and Following statistics, displaying the number of users following them and how many users they follow
- Follow/Unfollow button for logged-in users to manage their connections
  
User-Specific Actions  
For their own profile, users can:

- Edit their profile details, including description, location, and profile picture
- Update their username and password

![PostEdit](https://res.cloudinary.com/maxiscloud/image/upload/v1740906927/Screenshot_2025-03-02_at_10.15.08_a7ngjk.png)
  
For other users' profiles, logged-in users can:

- View the posts and events created by that user
- Follow or unfollow them
  
The Profile Page provides an organized space where users can showcase their content, track their social engagement, and stay connected with the FlavorFrames community.

<br><br>

### Future Features

- Add a bookmark feature for posts and events.
- Enhance event attendance functionality by adding an "Interested" option alongside "Attending.
- Implement date ranges and time selection for events.
- Ensure consistent rendering of post images so they always appear the same size.
- Enable automatic login after successful registration.

<br><br>

## The Skeleton Plane

### Wireframes

The wireframe for this project was designed using Figma to create a structured and user-friendly layout.  
These wireframe served as the foundation for the UI/UX design.

![Wireframe](https://res.cloudinary.com/maxiscloud/image/upload/v1740907691/Screenshot_2025-03-02_at_10.27.31_yv3pjp.png)

<br><br>

## The Surface Plane  

### Design  

#### Color Scheme  

FlavorFrames follows a carefully selected color scheme designed to create a warm, inviting, and visually appealing experience. The combination of orange, black, and green was inspired by the aesthetics of a classic burger house, evoking a sense of comfort, freshness, and bold flavors.

![Color sheme](https://res.cloudinary.com/maxiscloud/image/upload/v1740907871/flavorframes-colors_hwcntj.png)


#### Logo
The FlavorFrames logo embodies the brand’s essence, combining a bold and inviting design.  
The orange background reinforces the warm and appetizing feel, while the strong black typography adds a sense of sophistication and contrast.

![Logo](https://res.cloudinary.com/maxiscloud/image/upload/v1740908159/Screenshot_2025-03-02_at_10.35.41_cey58g.png)


#### Typography

FlavorFrames uses DM Sans as its primary typeface, chosen for its modern, clean, and highly readable design.  
This font enhances the user experience by maintaining a sleek and contemporary aesthetic across the platform.

![Font](https://fonts.google.com/specimen/DM+Sans)

<br><br>

## Technologies

### Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML)  - Provides the content and structure for the website
-   [CSS3](https://en.wikipedia.org/wiki/CSS)  - Provides the styling for the website
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)  - Provides interactive elements of the website
-   [React.js](https://en.wikipedia.org/wiki/React_(software))  - Provides the base for the frontend components

### Frameworks, Software and Web Applications

- [React Bootstrap](https://react-bootstrap.github.io/)  - A CSS framework that helps build solid, responsive, mobile-first sites
- [Figma](https://www.figma.com/)  - Used to create the wireframes
- [Coolors](https://coolors.co/)  - Used to pick the colour scheme of the website 
- [Github](https://github.com/)  - Used to host the repository, store the commit history and manage the project board containing user stories
- [Heroku](https://en.wikipedia.org/wiki/Heroku)  - A cloud platform that the application is deployed to
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)  - Used to test site performance
- [Canva](https://www.canva.com/)  - Used to generate the FlavorFrames logo
- [Am i Responsive?](https://amiresponsive.co.uk/) - Used to generate the mockup of the final website on several devices
- [Favicon](https://favicon.io/)  - Used to create the favicon
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/)  - Used to debug and test responsiveness
- [Google Fonts](https://fonts.google.com/specimen/DM+Sans) - Used to import the website font 
- [Cloudinary](https://cloudinary.com/)  - A service that hosts image files in the project.
- [HTML Validation](https://validator.w3.org/)  - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/)  - Used to validate CSS code
- [JSHint Validation](https://jshint.com/)  - Used to validate JavaScript code
- [Pexels](https://www.pexels.com/) - Free stock image provider for posts, events and avatars that were uploaded 
- [Font Awesome](https://fontawesome.com/) - Used for icons across UI

<br><br>

## Testing

Please click [here](https://github.com/Maximiliane-K/flavorframes/blob/main/TESTING.md) to read more information about the FlavorFrames frontend testing.

<br><br>

### Deployment

**Deployment**  

Once you've set up a new Gitpod workspace and initialized the project, you're ready to deploy it on Heroku.

- Log into your Heroku account and click on 'Create New App'. Choose a unique name that relates to your project.
- Pick a region that best matches your location and hit 'Create App'.
- Navigate to the 'Deploy' section, select GitHub as your deployment method, find your repository, and click 'Connect'.
- Click 'Deploy Branch' to initiate the build process on Heroku.
- Once the build completes successfully and you see the 'build succeeded' message, click 'Open App' to view your live application in the browser.
- Connecting a React Frontend to the API Backend
- After deploying your API to Heroku, the next step is linking your React frontend to the backend so it can send and receive data.

In the Heroku dashboard, open your API application's settings.  

- Under 'Settings', add a new Config Var named CLIENT_ORIGIN and set it to the URL of your deployed React app.
- Add another Config Var called CLIENT_ORIGIN_DEV, and enter your Gitpod preview URL (without the trailing slash).
 Since Gitpod occasionally updates this URL, remember to check it periodically while working on your project.  

Switch back to your frontend Gitpod workspace and install Axios using:
- 'npm install axios'
- Create a new folder named API, and inside it, create a file called axiosDefaults.js.
- Import axios at the beginning of this file.
- Set the baseURL to match the deployed API’s unique URL.
- Ensure that the Content-Type header is set to multipart/form-data since the API will handle both images and text.
- To prevent CORS issues, enable withCredentials by setting it to true.
- Import this file into App.js so that it can be used across your entire project.

  
**Forking This Repository**
You can create an independent copy of a GitHub repository by forking it.  
This allows you to modify the forked version without affecting the original project.  

To fork a repository:

- Sign in to GitHub and navigate to the repository.
- Click the 'Fork' button in the upper-right corner to create your own version of the repository.  

**Cloning This Repository**
A Git clone creates a connected copy of a repository that remains synced with the original.  

To clone a project:

- Open the repository on GitHub.
- Click the 'Code' button and choose the 'Clone' option from the dropdown menu.


<br><br>

## Credits

-   [React Bootstrap documentation:](https://react-bootstrap.netlify.app/)  - Documentation used for styling and to build responsive web pages
-   [Code Institute:](https://codeinstitute.net/)  Walkthrough modules for the Moments app
-   [Code Institute Tutor Support:](https://app.slack.com/)  For help and support
-   [React documentation:](https://legacy.reactjs.org/docs/getting-started.html)  Everything you need to know about React
-   [Stack Overflow:](https://stackoverflow.com/)  For troubleshooting and FAQ
-   [W3Schools:](https://www.w3schools.com/)  Online Web Tutorials




































