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
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFile = void 0;
const promises_1 = require("node:fs/promises");
const openFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    if (!path)
        throw new Error("No hay imagen");
    //   const directoryPath = join(os.tmpdir(), nombreImagen);
    return yield (0, promises_1.readFile)(path, { encoding: undefined });
});
exports.openFile = openFile;
