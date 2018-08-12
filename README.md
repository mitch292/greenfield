## STUD(y)
Search for places to study and see user reviews

## Context
My development on this application was part of what's called the "legacy" project at a coding school I attended called, Hack Reactor.  For this project we take another group of students code base and add a full stack feature to it.  I added a review feed to the "STUD(y)" application.  This feature is similar to a news feed you'd see on a site like facebook.  It displays the latest study location reviews and allows users to discuss those reviews.  Please follow the screen shots below to navigate to my feature.

## Installation and Setup Instructions
You can access this application here: http://study.andrewmitchell.io/

If you'd rather view this application on your local machine, you'll need node and npm installed globally.  Please contact me for local configuration requirements such as database url and third party api keys.

Installation:
`npm install`

To Start Server: 
`npm run server-dev`

To Compile Front End:
`npm run react-dev`

To Test the review feed component: 
`npm run review-feed-test`

To Visit Local App:
`localhost:8080`


##Screenshots 

![Alt text](https://s3.amazonaws.com/personal-project-readmes/study-pic-1.png "Home Page")
To utilize all the features in the app please register.  Only a username and password is required.


![Alt text](https://s3.amazonaws.com/personal-project-readmes/study-pic-1.png "Search Study Spots")
You can search and review your own study locations here.


![Alt text](https://s3.amazonaws.com/personal-project-readmes/study-review-feed-1.png "Nav to review feed")
After logging in you can access the review feed via the settings menu in the upper right hand corner.


![Alt text](https://s3.amazonaws.com/personal-project-readmes/study-review-feed-2.png "Nav to review feed")
Once on the feed you can see all the latest reviews and add comments.  The review feed will live update if others are using the application globablly.  You may notice some users have a horse symbol and a gold ring around their avatar.  These denote premium members, also known as "STUDs".  If you hover over the horse a tool tip will display with some info on how to become a member.

## Technologies
- React
- Node
- Express
- MySQL
- AWS

## Reflection
This was an application I built during my week off at Hack Reactor.  I was driven to build this out of personal experience.
When searching for a one stop shop for highlights there were a couple options, none of which seemed to be efficient.
With this application I hoped to provide an ad-free, no frills website where you can access and view the content you're 
looking for in quick fashion.

My core application technologies were all easy choices for their ease of use.  PostgreSQL was chosen as a persistent data store
purely to gain more experience with the database.  This application is hosted on AWS with a simple deployment to an EC2 instance
and an RDS instance. This was chosen our of time constraints, but a future iteration on this application bring a more elegant architecture.

From a functional perspect the biggest decision was the inclusion of a unique ID rather than setting up user profiles with
authentication.  There is no strong usecase for this application to store user data and therefore assume the liability of protecting
user data.  The only thing you might want to do is save highlights so you can share them with friends or watch them again later.
Allowing users to save highlights to a unique ID accomplishes this without exposing the application to any unnecessary liability


### Thanks for taking a look!  Hope you enjoy the highlights!

