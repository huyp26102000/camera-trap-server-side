import fs from "fs";

import database from "../database/index.js";
import { v4 as uuidv4 } from "uuid";

const store = async (data, createdTime) => {
  const name = uuidv4().toString();
  fs.writeFile(`test/${name}.png`, data, "base64", (err) => {
    if (err) console.log("write file fail", err);
    else {
      console.log("Stored file data");
      database.insertFrame(`test/${name}.png`, createdTime, null);
    }
  });
};

export default { store };
