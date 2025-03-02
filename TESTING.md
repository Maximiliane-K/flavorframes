# FlavorFrames

## Frontend Testing

### Table of Contents

- [Code Validation](#code-validation)
- [Manual Testing](#manual-testing)
- [Lighthouse Testing](#lighthouse-testing)
- [Known Bugs](#known-bugs)


### Code Validation

The FlavorFrames site has been passed through the [W3C html Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).


#### W3C HTML Validation Results

No errors were found when the deployed URL was passed through W3C HTML Validation. 
9 warning messages warned of trailing slashes in the index.html file, which I haven't resolved yet. 

![HTML](https://res.cloudinary.com/maxiscloud/image/upload/v1740909827/Screenshot_2025-03-02_at_10.54.29_oejqoe.png)

#### W3C CSS Validation Results

No errors or warnings were found when the deployed URL was passed through the W3C CSS Validation.

![CSS](https://res.cloudinary.com/maxiscloud/image/upload/v1740909828/Screenshot_2025-03-02_at_10.55.21_k96suu.png


## Manual Testing

### Navigation & Authentication
✓ Navigation - As a user, I can view a navigation bar on every page so that I can easily navigate between different sections of the app.  

✓ Routing - As a user, I can move between pages quickly so that I can view content seamlessly without needing a page refresh.  

✓ Authentication - Sign Up - As a user, I can create a new account so that I can access all features available to registered users.  

✓ Authentication - Sign In - As a user, I can log into the app so that I can access functionality exclusive to logged-in users.  

✓ Authentication - Logged-In Status - As a user, I can see whether I am logged in or not so that I know when I need to sign in.  

✓ Authentication - Refreshing Access Tokens - As a user, I can stay logged in until I choose to log out so that my session remains active without disruption.  

✓ Navigation - Conditional Rendering - As a logged-out user, I can see sign-in and sign-up options so that I can create an account or log in when needed.  

✓ Avatar - As a user, I can see other users' avatars (profile pictures) so that I can easily identify members of the platform.  

### Posts
✓ Create Posts - As a logged-in user, I can create posts so that I can share my content.  

✓ Edit Post - As a post owner, I can edit the text and image of my post so that I can make updates or corrections after posting.  

✓ Delete a Post - As a post owner, I can delete my post so that it is no longer visible on the platform.  

✓ View a Post - As a user, I can view the details of a single post so that I can learn more about it.  

✓ Posts List - As a user, I can see a list of posts ordered by the most recent first so that I can stay up to date with new content.  

✓ View Posts from Followed Users - As a logged-in user, I can see posts from users I follow so that I can keep up with their content.  

### Profiles
✓ View Profiles - As a user, I can view other users' profiles so that I can see their posts and events, learn more about them through their stats (number of posts, events, followers, and following), and read the information they’ve shared about themselves.  

✓ Most Followed Profiles - As a user, I can see a list of the most followed profiles so that I can discover popular users on the platform.  

✓ Follow/Unfollow a User - As a logged-in user, I can follow and unfollow other users so that I can control whose posts appear in my feed.  

✓ View All Posts by a Specific User - As a user, I can view all posts from a specific user so that I can catch up on their content or decide if I want to follow them.  

✓ View Events by a Specific User - As a user, I can see all events created by a specific user so that I can explore their events or decide if I want to follow them.  

✓ View Events I'm Attending - As a logged-in user, I can see a list of events I’m attending so that I can keep track of my upcoming plans.  

✓ Edit Profile - As a logged-in user, I can update my profile details, including my profile picture, bio, and location, so that I can keep my information up to date.  

✓ Update Username and Password - As a logged-in user, I can change my username and password so that I can update my display name and keep my account secure.  

### Comments
✓ Create a Comment - As a logged-in user, I can add comments to a post so that I can share my thoughts about it.  

✓ Comment Date - As a user, I can see how long ago a comment was made so that I know when it was posted.  

✓ View Comments - As a user, I can read comments on posts so that I can see what other users think about them.  

✓ Delete a Comment - As the owner of a comment, I can delete my comment so that I can remove it from the platform.  

✓ Edit a Comment - As the owner of a comment, I can edit my comment so that I can update or correct it.  

### Likes
✓ Like a Post - As a logged-in user, I can like a post so that I can show interest and that I like it.  

✓ Unlike a Post - As a logged-in user, I can unlike a post so that I can change my mind about which posts I support.  

✓ View Liked Posts - As a logged-in user, I can see a list of posts I’ve liked so that I can find them easily later.  

### Events
✓ Create an Event - As a logged-in user, I can create events so that I can share upcoming events with others.  

✓ Edit an Event - As the owner of an event, I can edit its details so that I can make updates or corrections after creating it.  

✓ Delete an Event - As the owner of an event, I can delete it so that it is no longer listed on the platform.  

✓ View All Events - As a user, I can see a list of all events so that I can explore upcoming and past events on the platform.  

✓ View a Single Event - As a user, I can view the full details of an event so that I can learn more about it.  

✓ Filter Events I’m Attending - As a user, I can filter events to only see the ones I have marked myself as attending.  

✓ Search Events - As a user, I can search for events so that I can quickly find specific ones of interest.  

✓ View Events from Followed Users - As a logged-in user, I can see events created by users I follow so that I can stay updated on what they are organizing or attending.  

✓ Search Events and Mark Attendance - As a user, I can search for events so that I can quickly find specific ones of interest and mark myself as attending them.  

✓ View Events from Followed Users and Manage Attendance - As a logged-in user, I can see events created by users I follow so that I can stay updated on what they are organizing or attending, and I can mark or remove my attendance from these events.  

### Lighthouse Testing



### Known Bugs

Profile Link Undefined in Post Component  

Bug Description:  
When clicking on a user's avatar in the Post component, the link was leading to an undefined path, causing broken navigation.  
This happened because the profile_id was sometimes missing or undefined, resulting in an invalid URL like /profiles/undefined.  

Temporary Fix: 
I Added a conditional check for profile_id and ensured it is correctly passed to prevent broken profile links.  


