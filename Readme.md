# YouTube Backend

## This is the Backend for the youtube app 


* __Day 1__ : Here I only did first configuration for the project such as __package.json__
***
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
***
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
            ```javascript
            const connectDB = async () => {
                try {
                    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
                    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
                } catch (error) {
                    console.log("MONGODB connection error",error);
                    process.exit(1)
                }
            }
            ```
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
        + At last export the **app**

    + Added the contents in **src > index.js**
        + Here **connectDB()** is return as promise where we can use **.then** and **.catch** methods.

            + In .then we filter out the the errors and we also listen to the **app** for starting the **server** which can be generated in our application when connecting to the Database

            + In .catch we can just console the connection between the application and the server
            ```javascript
            .then(() => {
                app.on("error",(error) => {
                    console.log("ERROR: ",error);
                    throw error
                })
                app.listen(process.env.PORT || 8000,() => {
                    console.log(`server is running at port: ${process.env.PORT}`);
                })
                })
            .catch((err) => {
                console.log("MONGO DB connection failed !!", err)
            })
            ```
    + Create **ser > utils > ApiError.js** : 

    ```javascript
    class ApiError extends Error {
        constructor(
            statusCode,
            message = "Something went wrong",
            errors = [],
            statck = ""
        ){
            super(massage)
            this.statusCode = statusCode
            this.data = null
            this.message = message
            this.success = false
            this.errors = errors

            if (statck) {
                this.stack = statck
            } else{
                Error.captureStackTrace(this, this.constructor)
            }
        }
    }

    export {ApiError}
    ```
    + The ApiError class is defined using the class keyword and extends the built-in Error class.
    + extends Error means ApiError inherits all the properties and methods of the Error class, allowing it to function like a standard error but with additional custom properties.