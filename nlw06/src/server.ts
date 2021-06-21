import express, { response } from "express";

const app = express();







app.get("/test", (request, response) => {


  return response.send("Olá Nlw");
});



app.post("/test-post", (request, response) => {


    return response.send("Olá Nlw Post");
  });







app.listen(4000, () => console.log("Server is Running"));