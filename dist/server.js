"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const index_1 = __importDefault(require("./routes/index"));
const port = process.env.PORT || 3005;
dotenv_1.default.config();
if (!process.env.PORT) {
    process.exit(1);
}
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true }));
app.use(express_1.default.json());
app.use("/mcq", index_1.default);
app.listen(port, () => {
    console.log(`Backend Server Started and Running on Port ${port}...`);
});
