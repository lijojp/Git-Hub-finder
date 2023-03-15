import express from "express";
import cors from "cors";
import Users from "./not needed files/users.js";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => { 
  const { q } = req.query;

  const search = (data) => {
    return data.filter((item) => item.login.toLowerCase().includes(q));
  };
  // res.json(Users.splice(0, 10));
  res.json(search(Users).splice(0, 10))
});  

app.listen(PORT, () => console.log(`server connected at ${PORT}`));
