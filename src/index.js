import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({
    path: '/.env'
})

connectDB()
.then(() => {

    app.on("error", (error) => {
        console.log("Error ", error)
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=> {
    console.log("Mongo DB connection error failed !!!", error);
})

// import {DB_NAME} from './constants.js'
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             `App is listening on port ${process.env.PORT}`
//         })
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// })()