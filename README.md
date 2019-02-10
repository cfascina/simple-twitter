# Simple Twitter
This project reproduces the Twitter functionalities of tweeting and liking tweets.
It was built with NodeJS for backend, ReactJS for the web application and React Native for the mobile app.

## Installing

#### Back End
- First of all, create an account at [mLab](https://mlab.com/) and configure your MongoDB database (it's free until 500MB, enough space for this application).
- After cloning, inside the **backend** folder, run `npm install`.
- Open the **backend/src/index.js** file and on line **10** configure your MongoDB database. Example: `mongodb://<username>:<password>@<database-address>/<database-name>`.
- You can use a REST client to deal with your requests, like [Insomnia](https://insomnia.rest/).
- If you installed [Insomnia](https://insomnia.rest/), create a POST request for your localhost and send some content inside these structure, like:
```
{
  "author": "Your Name",
  "content": "Your tweet content."
}
```
- Now run `npm start`.
- Access http://localhost:3000/<name-of-your-post-request> to see your post rendered at your browser.

#### Front End
- Open another terminal window/tab, and inside the **frontend** folder, run `npm install`.
- Now run `npm start` (you'll be asked to launch the application on a different port than 3000, type **Y** and go on, a browser will be opened at http://localhost:3001).

#### Mobile App
- Open another terminal window/tab, and inside the **app** folder, run `npm install`.
- Now run `npm start`.
- A new browser windows will be opened at http://localhost:19002/. Click on **Run on iOS simulator**.

To test it out, place the browser with the web application at one side of your screen and the iOS simulator at the other side, then start tweeting and liking tweets to see the realtime functionality working.
