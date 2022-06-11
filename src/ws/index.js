import { WebSocketServer } from "ws";
import dataStore from "../data/index.js";

const wss = new WebSocketServer({ port: 8080 });

const connection = async (ws) => {
  ws.on("message", message);

  // ws.send('something');
};

const message = async (data) => {
  console.log("received data");

  const dataObj = JSON.parse(data);
  dataStore.store(dataObj?.data, dataObj?.created_time);
};

const listen = async () => {
  wss.on("connection", connection);
};
export default { listen };
