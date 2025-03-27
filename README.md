User Management App


Overview
This is a React-based application that integrates with the Reqres API to perform user management tasks such as authentication, listing users, editing, and deleting users. The app uses Bootstrap for styling, providing a clean and responsive UI with a classic look.

Features
Authentication : Users can log in using valid credentials.
User List : Displays a paginated list of users with their details (name, email, avatar).
Edit User : Allows updating user details (first name, last name, email).
Delete User : Removes users from the list.
Pagination : Supports navigating through multiple pages of users.
Responsive Design : Works seamlessly on both desktop and mobile devices.
Tech Stack
Frontend Framework : React
Styling : Bootstrap + Custom CSS
API Integration : Axios for HTTP requests
State Management : React Context API
Routing : React Router
Installation
Prerequisites
Node.js (v16 or higher)
npm (Node Package Manager)


Steps to Run Locally 
git clone https://github.com/your-repo/react-user-management.git
cd react-user-management 
npm install
npm start 
The app will launch in your default browser at http://localhost:3000.

Login Credentials :
Email: eve.holt@reqres.in
Password: cityslicka

Usage
Login :
Navigate to /login and enter valid credentials (eve.holt@reqres.in, cityslicka).
On successful login, you'll be redirected to the user list page.
User List :
View paginated users with their avatars, names, and emails.
Use the pagination controls to navigate between pages.
Edit User :
Click the "Edit" button on a user card to open the edit form.
Update the user's details and save changes.
Delete User :
Click the "Delete" button to remove a user from the list.
API Documentation
The app uses the following endpoints from the Reqres API (https://reqres.in/api):

POST /api/login : Authenticate user with email and password.
GET /api/users?page=1 : Fetch paginated user data.
PUT /api/users/{id} : Update user details.
DELETE /api/users/{id} : Delete a user.
Error Handling
Invalid login credentials display an error message.
API errors (e.g., failed fetch/update/delete) show appropriate alerts.
Token persistence ensures users remain logged in unless they manually log out.


Author
Name : B.Jyothirmai

