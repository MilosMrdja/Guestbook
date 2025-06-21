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
- Open the MySQL CLI or cmd and **type**: mysql -u root -p (After this, you will need type your root password)
- Run the **.sql script**: "SOURCE server/schema.sql" If it does not work, copy the script and run in MySQL workbanch
- exit from mysql CLI by **command**: exit
```


## 3. Backend - Node.js Server
```
- locate to the server folder by **command**: cd server
- type **command**: npm install
- create .env file by **command**: New-Item -ItemType File .env (or manually create it)
- Add your configuration into **.env file**:
    HOST=127.0.0.1 (your localhost)
    USER=root
    PASSWORD=YOUR_PASSWORD (you should type root user password)
    DATABASE=guestbook_db
- start server by **command**: npm run dev
```


## 4. Frontend - ReactApp
```
Open new cmd or PowerShell window
- locate to the client folder
    if you are locate in guestbook/server type **command**: cd ../client
    or in guestbook type **command**: cd client
- type **command**: npm install
- create .env file with **command**: New-Item -ItemType File .env (or manually create it)
- Add your configuration into **.env file**:
    REACT_APP_BASE_URL=http://localhost:8080/
NOTE: Make sure that your server is running on localhost port 8080
- start frontend by **command**: npm start
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

Note: All the following commands and instructions are intended for Windows users.
If you are using macOS or Linux, the commands might differ (for example, use touch instead of New-Item, etc.).

## Contributors

Milos Mrdja – Project creator
