// SideChat.js //


import { Avatar }  from "@material-ui/core";
import React from"react";
import "./SidebarChat.css";

function SidebarChats(){
return(
<div className = "SidebarChat">
<Avatar />
<div className ="SidebarChat_info">
<h2>Room name</h2>
<p>This is the last message</p>
</div>

</div>
);
}


export default SidebarChats;
