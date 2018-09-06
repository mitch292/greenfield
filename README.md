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
Adding a full stack feature to a existing code base was a fascinating experience.  Being able to read and understand others code base is fascinating in itself.  You really get to step into others logical reasoning and take a look at how they structure their applications.  Lastly, encountering and fixing legacy bugs is also valuable and requires that your really dive deep into the legacy code base and understand it's inner workings.

With this project I wanted to focus not only on my full stack development skills, but also focus on the CSS.  The review feed uses no CSS helpers and is implemented from scratch.

I deployed this application with AWS.  The MySQL database is hosted with RDS and the application sits on an EC2 instance.  Please reach out with any questions or comments!


### Thanks for taking a look!

