import io from "socket.io-client";

const ENDPOINT = "https://chatmusicroom.herokuapp.com/"
let socket = io(ENDPOINT);
export default socket;

