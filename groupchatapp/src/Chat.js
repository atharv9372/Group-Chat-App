// Chat.js //


import { AttachFile, MoreVert, SearchOutlined }  from "@material-ui/icons";
import { Avatar, IconButton }  from "@material-ui/core";
import React from"react";
import  InsertEmoticonIcon  from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
import  MicIcon from "@material-ui/icons/Mic";
// import axios from "./axios";

function Chat({messages}){
// 	const [input, setInput] = useState("");
	
// const sendMessage = async (e) => {
// 	e.preventDefault();
	
// 	await axios.post("/messages/new", {
// 	message: "input",
//     name: "DEMO APP",
//     timestamp: "Just now!",
//     received: false,
// });

// setInput("");

// };	
	
return(
<div className = "Chat">
<div className = "Cha_header">
<Avatar />
<div className = "Cha_headerInfo">
<h3>Room name</h3>
<p> Last seen at...</p>
</div>

<div className = "Cha_headerRight">
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

{/* <div className = "Chat_body">
{messages.map((message) => (	
<p ClassName={'chat_message ${message.received && "chat_reciever"}'}>
<span ClassName="chat_name">{message.name}</span>
{message.message}
<span ClassName="chat_timestamp">{message.timestamp}</span>
</p>
))};

<p ClassName="chat_message chat_reciever">
<span ClassName="chat_name">Aditya</span>
This ia a message
<span ClassName="chat_timestamp">{newDate().toUTCstring()}</span>
</p>

</div> */}

<div className = "Cha_footer">
<InsertEmoticonIcon />
{/* <form>
<input value={input} onChange={e => setInput (e.target.value) } placeholder="Type a message type="type="text" />
<button onClick={sendMessage} type="submit">Send a message</button>
</form>  */}
<MicIcon />
</div>
</div>
);
}



export default Chat;
