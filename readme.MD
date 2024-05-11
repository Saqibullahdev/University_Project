# This is UET CS & IT Departmental Website Using Tech Stack React Js as frontend ,Node js as Run time environment and MySQL as Database
# Project Setup setup


---
1- Clone the repository

```
git clone https://github.com/Saqibullahdev/University_Project.git
```

2- Install the dependencies

```
npm install
```
3- Create a `.env` file in the root directory of the project and add the following

```env
PORT=8080
DB_HOST=localhost
DB_USER=root    
DB_PASSWORD=123
etc
```

4- Run the project

```
node index.js
```

make sure you are in the root directory of the project while running the above command
---

### Prerequisites
- React js
- Node.js
- MySQL
- Postman

## Services this Application offer

**Four main Serivces this application offer are:**

- Notification Service
- Departmental gallery
- Email to Chairman
- User Management

with passage of time more services will be added to this application


**what is Notification Service?**

Any user can see the notification posted by the admin of the website. The notification can be of any type like any Exam related notification, any news notification etc.

**what is Departmental Gallery?**
Any user can see the gallery of the department. The gallery can be of any type like any event,
society related media etc.

**what is Email to Chairman?**
Any user can send email to the chairman of the department. The user will fill the form and send the email to the chairman.
user can only send email if he/she is logged in as `student` .

It seems like you're providing instructions for contributors to your project. Here's a revised version for clarity and readability:

---

## Instructions for Contributing to This Project

If you have any ideas or features you'd like to collaborate on for this project, feel free to reach out! Anyone is welcome to contribute. You can email me at `22pwbcs0916@uetpeshawar.edu.pk` to get started. Let's build something great together!


## APIS Endpoints Related to User Management

**1- Register User**

```http
  POST localhost:8080/api/v1/user/create
```

Data Pass in Request body:
```json

    {
    "Username":"SaqibUllah",
    "Email":"saqibUllah@sample.com",
    "Passowrd":"1234"
    }

```

**2- Login User**

```http
  POST localhost:8080/api/v1/user/login
```

Data Pass in Request body:
```json

    {
    "Username":"SaqibUllah",
    "Passowrd":"1234"
    }

```

When you login in response a cookie will be set in your browser with the name `user_token` which will be used for authentication in further requests.
base on that token you can access user `dashboard` and send email to `chairman` of the department.


## APIS Endpoints Related to Admin Management

**1- Register Admin**

```http
  POST localhost:8080/api/v1/admin/create
```

Data Pass in Request body:
```json
  
      {
      "Username":"SaqibUllah",
      "Email":"abc@gmail.com",
      "Password":"1234"
      }

```

**2- Login Admin**

```http
  POST localhost:8080/api/v1/admin/login
```

Data Pass in Request body:
```json
  
      {
      "Username":"SaqibUllah",
      "Password":"1234"
      }
  
  ```
  
  When you login in response a cookie will be set in your browser with the name `admin_token` which will be used for authentication in further requests.
base on that token you can access admin `dashboard` and post `notification` and `gallery` of the department.

**3- Update Admin**
  
  ```http
    PUT localhost:8080/api/v1/admin/update
  ```

Data Pass in Request body:
```json
  
      {
        "AdminID":1,
      "Username":"SaqibUllah",
      "Email":"",
      "Password":"1234"
      }

```

