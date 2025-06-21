# 📖 Guestbook Full-Stack Application

Welcome to the simple but functional **Guestbook** application that allows visitors to leave a message and their name.  
This app is a full-stack solution built with:

- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: MySQL

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MySQL](https://dev.mysql.com/) (version 8 or higher)
- [Git](https://git-scm.com/)

Check your versions with:

```bash
node -v
mysql --version
git --version
```

## 1. Clone the repository

```
> git clone https://github.com/MilosMrdja/Guestbook.git
> cd guestbook-app
```

## 2. Database Setup – MySQL

```
- Start your MySQL server.
- Open the MySQL CLI and type mysql -u root -p
- Run the .sql script: SOURCE guestbook.sql; If it does not work, copy the script and run in MySQL workbanch
```


## 3. Backend - Node.js Server
```
- cd server - locate to the server folder
- npm install
- create .env file with command: touch .env
- Add your configuration:
HOST=127.0.0.1 (your localhost)
USER=root
PASSWORD=YOUR_PASSWORD (you should type root user password)
DATABASE=guestbook_db
- start server with command:
    npm run dev
```


## 4. Frontend - ReactApp
```
- ../client - locate to the client folder
- npm install
- create .env file and add this line into .env
    REACT_APP_BASE_URL=http://localhost:8080/
NOTE: Make sure that your server is running on localhost port 8080
- start frontend with command:
    npm start
```


## 5. Application works
```
    Frontend → http://localhost:3000
    Backend API → http://localhost:8080
```

## Troubleshooting

If you get database errors, make sure your .env config matches your MySQL setup.

If you face CORS errors, check that backend uses cors() middleware.

Use npm run dev in backend to auto-restart server on code changes.

## Contributors

Milos Mrdja – Project creator
