import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import morgan from "morgan";
import multer from "multer";
import os from "os";
import { uploadImage } from "./firebase";
import { openFile } from "./openfile";

//This must be the first thing to run
dotenv.config();

const app = express();
const upload = multer({ dest: os.tmpdir() });

//Start cronjobs on app start

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.get("/ping", (_, res: Response) => {
  res.send("PONG");
});
app.post(
  "/upload-image",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const formData = req.body;
    const file = req.file;
    console.log("form data", formData);
    console.log(file);
    console.log(file?.originalname);
    const image = await openFile(file?.path);
    const url = await uploadImage(image, file?.originalname);
    console.log(url);
    res.send(url);
  }
);

const PORT = process.env.PORT ?? "5000";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
