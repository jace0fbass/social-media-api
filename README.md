# 18 NoSQL: Social Network API

## Walkthrough
View walkthrough video <a href="https://drive.google.com/file/d/13AYwzUPTPAZot6QWLF0zmEaPjbcwHAUZ/view">here</a>.

## Description
In this challenge I have built an API for a social media network using <a href="https://www.npmjs.com/package/express">Express</a>, <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>, and <a href="https://www.npmjs.com/package/dayjs">DayJS</a>. Users can add and delete friends as well as create, update, and delete thoughts that friends can react to. 


## Installation
To use this application users must clone the repository and enter "npm install" into their respective terminal. This will install <a href="https://www.npmjs.com/package/express">Express</a>, <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>, and <a href="https://www.npmjs.com/package/dayjs">DayJS</a> onto the machine. 

## Credits
This application was created by <a href="https://github.com/jace0fbass">Jason Jones</a>.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

