## Photo App Project
[Functionality](#functionality)

### Intro:
This is an integration of Angular and Node. Angular project is compiled and served as a static file on the express server.

### How to use:
[ClickMe](http://167.99.14.231:8000/login)

__Remember__: The predetermined credentials are:
> Username: __admin123__
> Password: __password123__

<h3 id="functionality">Functionality</h3>
### Functionality:

1. CRUD operations are implemented:
 + Home pages Read all the photos from server
 + User can Create new photo by utilizing the Photo Upload box on the top of the home page
 + Updating photo function can be found by clicking into each individual photo
 + User can delete each photo by hitting the delete button

2. ___New___: Flash message is used to display notification when delete a photo or update a photo

3. Validation is applied to photo uploading, editing forms and login form

4. AppRoutingModule is used to navigate between components. ___New___: nested routes are used under ```photosComponent```

5. Utilize HttpClient in PhotoService to interact with data on MongoDB using REST APIs

6. ___New___: A login page is applied and Angular responds accordingly based on if user is logged in or not

7. ___New___: Enables function to check if existed username is used when registering

8. ___New___: Added profile page to enable user to view and update personal information
