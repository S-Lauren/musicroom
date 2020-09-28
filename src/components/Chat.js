import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button } from '@material-ui/core';
import socket from '../test';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const Chat = () => {

const classes = useStyles();
const [message, setMessage] = useState("")
const [listMessage, setListMessage] = useState([])


const handleMessageSumit = (e) => {
  e.preventDefault()
  socket.emit("sendMessage", message)
  setMessage('')
}

useEffect(() => {
  socket.emit("join")
}, [])

useEffect(() => {
  socket.on("message", (message) => {
    setListMessage(prev => [...prev, message])
  })
},[])

  return (
  <>
    {listMessage}
      <form onSubmit={handleMessageSumit}>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="send your message" />
      <Button type="submit">Send</Button>
    </form>
  </>
  );
};

export default Chat;