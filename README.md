# Favors

Favors is a single-page web application built with MERN stack. Concept of the app aims at people who have a little extra time that could be filled with doing somebody a favor. For example a user A goes from location A to location B and has a quick stop on the way to pick up a medicine that delivers to a user B.

## Project Structure

**/client** — F/E project files built in React
**/config** — environment variables, DB configuration
**/middleware** — layer used for private routes
**/models** — Mongoose models
**/routes** — REST API routes
**server.js** — server configuration file

## Installation & Running the App

Install B/E related dependencies:
```
npm install
```

Install F/E related dependencies:
```
cd client
npm install
```

Running B/E and F/E dev environment with nodemon concurrently:
```
npm run develop
```

## Future Steps

Examples:
- [ ] Fix user account registration via Google API
- [ ] Create an account page (F/E)
- [ ] Create a favor in (F/E)
- [ ] Filtering / Sorting based on location
- [ ] Users should be able to assign themselves to a favor
- [ ] Favor status changes
- [ ] Notify owners that a user has just assigned to their favors (Socket.io)