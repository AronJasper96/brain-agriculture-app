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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_server_1 = __importDefault(require("./src/express-server"));
/**
 * Initializes the application by starting the Express server and populating the film table.
 *
 * @return {Promise<void>} A promise that resolves when the initialization is complete.
 */
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, express_server_1.default)();
        const port = process.env.PORT_API || 3000;
        server.listen(port, () => {
            console.log(`API run on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error(error);
    }
});
init();
