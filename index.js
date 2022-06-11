import database from "./src/database/index.js";
import ws from "./src/ws/index.js";

const main = () => {
  database.setup();
  ws.listen();
};

if (main) {
  main();
}
