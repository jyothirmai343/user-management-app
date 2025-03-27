User Management App

This is a React-based user management application that integrates with the Reqres API. It allows users to log in, view a paginated list of users, edit user details, and delete users. The app is built following the requirements outlined in the assignment.

Table of Contents

Features
Installation
Usage
Deployment
Technologies Used
Folder Structure
Error Handling
Contributing
Features

Level 1: Authentication Screen
Users can log in using the following credentials:

Email: eve.holt@reqres.in
Password: cityslicka

On successful login, the token is stored in localStorage, and the user is redirected to the Users List page.

Level 2: List All Users

Displays a paginated list of users fetched from the /api/users?page=1 endpoint.
Each user's first name, last name, and avatar are displayed in a structured layout (cards or table format).
Pagination is implemented to navigate through different pages of users.


Level 3: Edit, Delete, and Update Users
Edit: Clicking the "Edit" button opens a form pre-filled with the user's data. 
Users can update their first name, last name, and email using the /api/users/{id} endpoint.
Delete: Clicking the "Delete" button removes the user from the list using the /api/users/{id} endpoint.
Success or error messages are displayed based on the outcome of each operation.
Bonus Features

Client-Side Search: Users can search and filter the list of users by name or email.
React Router: The React Router handles navigation between pages (Login, User List, Edit User).
Responsive Design: The app is mobile-friendly and works well on desktop and mobile devices.


Usage
Login
Use the following credentials to log in:
Email: eve.holt@reqres.in
Password: cityslicka
Users List
After logging in, you will see a paginated list of users.
Use the pagination buttons to navigate between pages.
Edit User
Click the "Edit" button next to a user to open the edit form.
Update the user's details and save the changes.
Delete User
Click the "Delete" button next to a user to remove them from the list.
Search
Use the search bar to filter users by name or email.


Technologies Used
React : Frontend framework.
Bootstrap : CSS framework for styling.
Reqres API : Mock API for user data.
React Router : For navigation between pages.  

Error Handling
API errors are handled gracefully, and appropriate error messages are displayed to the user.
Form validation is implemented for the login and edit screens to ensure all required fields are filled. 

Contributing
Feel free to fork this repository and submit pull requests if you'd like to contribute! 


