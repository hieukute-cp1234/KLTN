import express from "express";
import { PORT, IP_LAN } from "./constants";

const app = express();
const route = express.Router();

app.listen(PORT, IP_LAN, () => {
  console.log(`Server is running on port: ${PORT}`);
});
