#Lab Assignment

<!-- - REQUIRED

    1. Setup an API with the project structure like:

        - /client

        - /server

            1. /routes

                - index.js

                - chirps.js   

            2. server.js

            3. chirpsstore.js (Download: https://www.filepicker.io/api/file/itlRSKX7R0a9JS4mBohg)

    2. In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js

        - Import chirpsstore, and use it to read and write chirps to the json file

            1. The json file will be created the first time you run successfully!

            2. Remember to export your router with module.exports

    3. In routes/index.js, import the chirps router and add it to a new router

        - use app.use with the /chirps route to add to the root api router

        - Export the router

    4. In server.js, import the routes folder (./routes)

        - add the api router to the express app with the path /api

    5. Test all of your methods using Postman (https://www.getpostman.com/) -->


- ADVANCED

    1. Create an index.html, styles.css, and app.js file in the client folder

        - Code an app that uses jQuery to call your API and displays chirps

            1. Create a form that lets you create new chirps

            2. Add an x next to chirps that will delete them when clicked

            3. When a chirp is clicked, popup a modal that lets you edit the chirp

    2. Remember to use express.static middleware!


