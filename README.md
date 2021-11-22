# Project 4: M.E.V. Calorie Counter

### Technologies Used
#### Back-End
1. Python
2. Django
    - Bcrypt

#### Front-End
1. React
    - Chart.js
    - Moment.js
2. Third Party API:
    - https://calorieninjas.com/

#### Deployment
1. Heroku

### User Stories
1. Allow Users to create and log into their own accounts
2. Users can log the foods (name, food image, calories, & date of entry) into the application
3. Users also have the ability to search for foods through the third-party API to obtain the calorie count for the searched food
4. Users can edit their logged foods
5. Once the User is signed in, the application will provide them with a chart that displays the calories per day and also the total calories logged

### Approach Taken
#### Back-End:
By implementing the Python framework Django, as a group, we were able to successfully create a back-end application that would has the capability to store information within a SQL(PostGres) database (for this specific project the Heroku database was used).
After setting up the standard structure of the backend (C.R.U.D), we were able to incorporate one-to-many relationships by inputing the User's ID into any array called 'linked_users' within the foods model.
A user's model was added to allow creations of users. For security reasons Bcrypt was used to hash all user passwords.

#### Front-End:
The Front-End application was created using a JavaScript framework called React. Using the routes created in the Back-End, users are able to view logs, post logs, delete logs, and edit logs. Using JavaScript logic and functionality, users are able to log in and view logs that only they posted. Using a JavaScript library called 'Chart.js' the users are able to view a bar chart that displays the total calories consumed per day. JavaScript library 'Moment.js' was also used to parse the date of when the log was created into readable time.
An API named 'calorieninjas' also was implemented to provide users with the ability to search calories of foods that they do not know the calories of. The search foods structure/functionality is similar to the ADD and EDIT components (forms).
Additionaly, an html datalist was placed in the ADD component. As a user enters a food name that already exists in the database, it will appear in the dropdown of the input. If selected by the user, then the other fields will populate with the database values.
For styling the application; the CSS layouts that we used on majority of the application were CSS FlexBox and CSS Grid.

### Future Adjustments
- Add an additional model that allows Users to log their workouts
    - Using the workout model, have the application calculate total consumed calories minus calories exhausted
- Create achievement badges for certain food groups (ex. "Super Foods"), nutritional goals, or dietary goals

### Live App Links
#### Back-End
https://powerful-sierra-13214.herokuapp.com/
#### Front-End
https://protected-caverns-56689.herokuapp.com/
