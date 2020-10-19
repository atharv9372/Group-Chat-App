/ / SideChat.js / /


import { Avatar }  from "@material-ui/icons/core";
import React from"react";
import "./SideChat.css";

function SideChat(){
return(
<div className = "SideChat">
<Avatar />
<div className ="SideChat_info">
<h2>Room name</h2>
<p>This is the last message</p>
</div>

</div>
);
}


export default SidebarChat;
