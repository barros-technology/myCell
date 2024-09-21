import express, { json, Request, Response } from "express";
import { membersRouter } from "./routes/member.routes";
import { cellRouter } from "./routes/cell.routes";
import { leaderRouter } from "./routes/leader.routes";
import { galRouter } from "./routes/gal.routes";

const app = express();

app.use(json());

app.use("/members", membersRouter);

app.use("/cell", cellRouter);

app.use("/leader", leaderRouter);

app.use("/gal", galRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`API myCell sucessfully started on port ${port}`);
})