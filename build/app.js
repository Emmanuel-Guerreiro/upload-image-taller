"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const multer_1 = __importDefault(require("multer"));
const os_1 = __importDefault(require("os"));
const firebase_1 = require("./firebase");
const openfile_1 = require("./openfile");
//This must be the first thing to run
dotenv_1.default.config();
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({ dest: os_1.default.tmpdir() });
//Start cronjobs on app start
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
app.get("/ping", (_, res) => {
    res.send("PONG");
});
app.post("/ping", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = req.body;
    const file = req.file;
    console.log("form data", formData);
    console.log(file);
    console.log(file === null || file === void 0 ? void 0 : file.originalname);
    const image = yield (0, openfile_1.openFile)(file === null || file === void 0 ? void 0 : file.path);
    const url = yield (0, firebase_1.uploadImage)(image, file === null || file === void 0 ? void 0 : file.originalname);
    console.log(url);
    res.send(url);
}));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "5000";
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
