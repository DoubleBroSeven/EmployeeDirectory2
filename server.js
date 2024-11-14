const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});

app.use(express.json())
app.use("/employees", require("./employeeroute"))



app.use((req, res, next)=>{
  next({status:404, message:`Endpoint Not Found`})
})

app.use((err, req, res, next)=>{
  console.error(err)
  res.status(err.status ?? 500);
  res.json(err.message ?? `Something went wrong :::(`)
})

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
