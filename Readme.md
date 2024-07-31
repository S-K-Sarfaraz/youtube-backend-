# YouTube Backend

This is the Backend for the youtube app 

* __Day 1__ : Here I only did first configuration for the project such as __package.json__

* __Day 2 | Part 1__ : Created files structure
    * public > temp > .gitkeep
    * src
        * controllers
        * db
        * middlewares
        * models
        * routes
        * utils
        * app.js
        * constants.js
        * index.js
    * .env
    * .gitignore - **created by git ignore constructor**
    * package-lock.json
    * package.json
    * Readme.md

* __Day 2 | Part 2__ : 
    * Added **dev dependencies packages** for project such as 
        * **mpm i nodemon** - to restart the server automatically
        * **npm i prettier**
            * configure and created two files such as 
                * prettierrc - configuration for project
                * prettierignore - ignore files

* **Day 3 | Part 1** : This day I try connect to MongoDB Atlas. 
    + Added npm packeg such as :
        + **npm i dotenv**
        + **npm i express**
        + **npm i mongoose**

    + Added the contents in **src > index.js**
        + dotenv config for the connection of **index.js** with **.env** file, it just done by adding the path. 
        + And also connecting the file with **./db/index.js** file, for executing the **connectDB** method 

    + Added the contents in **src > constants.js**
        + export the **DB_MANE**    

    + Added the contents in **.env**
        + **MONGODB_URI** generated from mongodb atlas

    + Added the contents in **src > db > index.js** 
        + import mongoose
        + import DB_NAME
        + Async function for the connection of the db with the project
            + try > **mongoose.connect** > at > **process.env.MONGODB_URI** > catch error > printing the error
        + export default     

+ **Day 3 | Part 2** : Utils codes Added

    + Added npm packeg such as :

        + **npm i cors** = corss origin resours sharing
        + **npm i cookie-parser**
        
    + Added the contents in **src > app.js**
        + import **express, cors, cookie-parser**
        + export **app**
        + app = express()
        + **cors** code some for any project
            
            ```javascript
            app.use(cors({
                origin: process.env.CORS_ORIGIN,
                credentials:true
            }));
            ```
            
        + **Middlewares** for every project after **cors**    

            ```javascript
            app.use(express.json({limit:"16kb"}));
            app.use(express.urlencoded({extended:true, limit:"16kb"}));
            app.use(express.static("public"));
            app.use(cookieParser());
            ```
            
            