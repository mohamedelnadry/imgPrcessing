import express from "express";
const app = express();
const port = 3000;
import routes from "./routes/routes";
app.use(express.static(process.cwd() + "/images/"));
app.use(express.static(process.cwd() + "/images/imgeAfteEdit"));

app.get("/", (req, res) => {
  res.send("Bad Request try /api");
});
app.get("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
export default app;
