//*APP.JS*//

import React from"react";
import "./App.css";
import chat from "./chat";
import sidebar from "./sidebar";
import Pusher from "pusher-js";

function App(){
const [messages, setMessage] = useState([]);


// useEffect(() => {
// axios.get('/messages/sync')
// .then(response => {
// setMessages(response.data);
// )}

// }, []);

useEffect(() => {
const pusher = new Pusher('1d4d1ef9b440596935', {
cluster: 'eu'
});

const channel = pusher.subscribed("messages");
channel.bind("inserted", function(data){
setMessages([...messages, newMessage]);
});

return () => {
channel.unbind_all();
channel.unsubscribe();
};
}, [messages]);

console.log(messages);


return(
<div className = "app">
<div className = "app_buddy">
<sidebar/>
<chat messages = {messages}/>
</div>
</div> 
);
};
