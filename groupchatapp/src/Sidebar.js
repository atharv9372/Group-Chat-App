/* Sidebar.js */


import React from"react";
import "./App.css";
import SidebarChats from "./SidebarChat";
import DonutLarge from "@material-ui/icons/DonutLarge";
import { Avatar , IconButton }  from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined }  from "@material-ui/icons";

function Sidebar(){
return(
<div className = "sidebar">
<h1>I am a sydebar</h1>
<div className = "sidebar_header">
<Avatar src="/"/>
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
