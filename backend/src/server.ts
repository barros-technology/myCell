import { app } from "./app";

const port = 3000;

app.listen(port, () => {
    console.log(`API myCell sucessfully started on port ${port}`);
})