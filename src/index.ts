// import http from "http";
// import { server } from "typescript";
// const port:number=3000


// http.createServer(
// (req,res)=> {
// res.statusCode=200
// res.setHeader('content-type','text/json'
// )
// res.end("Hello world\n")
// }
// ).listen(port,()=>console.log(`server is running on port ${port}`))

import  express,{Application} from 'express'
import dotenv from 'dotenv';
import { routes } from './routes';
import bodyParser from 'body-parser'
const app:Application=express()

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// routes
app.use('/',routes)

// start the server
app.listen(process.env.BACK_PORT, () => {
  console.log(
    `server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`
  );
});