import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path: '/.env'
})

connectDB()

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