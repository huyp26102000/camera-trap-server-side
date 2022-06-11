import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const connection = async (ws) => {
  ws.on("message", message);

  // ws.send('something');
};

const message = async (data) => {
  console.log("received: %s", data);
};

const listen = async () => {
  wss.on("connection", connection);
};
export default { listen };
