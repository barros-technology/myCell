import express, { json } from "express";
import helmet from "helmet";
import "express-async-errors";
import { cellRouter } from "./routes/cell.routes";
import { leaderRouter } from "./routes/leader.routes";
import { galRouter } from "./routes/gal.routes";
import { membersRouter } from "./routes/member.routes";
import { HandleErrors } from "./errors/handleErrors.middleware";

export const app = express();

app.use(helmet);

app.use(json());

app.use("/members", membersRouter);

app.use("/cell", cellRouter);

app.use("/leader", leaderRouter);

app.use("/gal", galRouter);

app.use(HandleErrors.execute);

