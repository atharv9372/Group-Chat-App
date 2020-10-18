/ / Sidebar.js / /


import React from"react";
import "./App.css";
import chat from "./chat";
import sidebar from "./sidebar";
import Donutlarge from "@material-ui/icons/DonutLarge";
import { Avatar , iconButton }  from "@material-ui/icons/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVertIcon";


function Sidebar(){
return(
<div className = "sidebar">
<h1>I am a sydebar<h1>
<div className = "sidebar_header">
<Avatar src="/>
<div className = "sidebar_headerRight">
<IconButton>
<DonutLarge/>
</IconButton>
<IconButton>
<ChatIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>
</div>
</div>

<div className = "sidebar_Search">
<div className = "sidebar_Searchcontainer">
<SearchOutlined />
<input Searchholder="search or start new chat" type= "text" /> 
</div>
</div>

<div className = "sidebar_chats">
<SidebarChats/>
<SidebarChats/>
<SidebarChats/>
</div> 
</div>
);
}

export default Sidebar;
