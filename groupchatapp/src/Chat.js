// Chat.js //


import { AttachFile, MoreVert, SearchOutlined }  from "@material-ui/icons";
import { Avatar, IconButton }  from "@material-ui/core";
import React from"react";
import { useState } from "react";
import  InsertEmoticonIcon  from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
import  MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { useStateValue } from './StateProvider';

function Chat({messages}){
	const [input, setInput] = useState("");
	const [{user}, dispatch] = useStateValue();
	
const sendMessage = async (e) => {
	e.preventDefault();
	
	await axios.post("/messages/new", {
	message: input,
    name: user.email,
    timestamp: "Just now!",
    received: false,
});

setInput("");

};	
	
return(
<div className = "Chat">
<div className = "Chat_header">
<Avatar />
<div className = "Chat_headerInfo">
<h3>Room name</h3>
<p> Last seen at...</p>
</div>

<div className = "Chat_headerRight">
<IconButton>
<SearchOutlined/>
</IconButton>
<IconButton>
<AttachFile/>
</IconButton>
<IconButton>
<MoreVert/>
</IconButton>
</div>
</div>

<div className = "Chat_body">
{messages.map((message) => (	
<p className={`Chat_message ${message.received && "Chat_reciever"}`}>
<span className="Chat_name">{message.name}</span>
{message.message}
<span className="Chat_timestamp">{message.timestamp}</span>
</p>
))}

{/* <p className="Chat_message Chat_reciever">
<span className="Chat_name">Divesh</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p>

<p className="Chat_message">
<span className="Chat_name">Aditya</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p>

<p className="Chat_message Chat_reciever">
<span className="Chat_name">Divesh</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p>

<p className="Chat_message">
<span className="Chat_name">Dipesh</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p>

<p className="Chat_message Chat_reciever">
<span className="Chat_name">Divesh</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p>

<p className="Chat_message">
<span className="Chat_name">Atharv</span>
This ia a message
<span className="Chat_timestamp">{new Date().toGMTString()}</span>
</p> */}

</div>

<div className = "Chat_footer">
<InsertEmoticonIcon />

<form>
<input value={input} onChange={e => setInput(e.target.value) } placeholder="Type a message"type="text" />
<button onClick={sendMessage} type="submit">Send a message</button>
</form> 
<MicIcon />
</div>
</div>
);
}



export default Chat;
