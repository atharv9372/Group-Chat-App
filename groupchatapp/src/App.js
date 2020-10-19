//APP.JS//

import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
// import Pusher from "pusher-js";

function App(){
// const [messages, setMessages] = useState([]);


// useEffect(() => {
// axios.get('/messages/sync').then(response => {
// setMessages(response.data);
// });

// }, []);

// useEffect(() => {
// const pusher = new Pusher('1d4d1ef9b440596935', {
// cluster: 'eu',
// });

// const channel = pusher.subscribed("messages");
// channel.bind("inserted", (newMessage) => {
// setMessages([...messages, newMessage]);
// });


// return () => {
// channel.unbind_all();
// channel.unsubscribe();
// };

// }, [messages]);

// cosole.log(messages);


return(
<div className = "app">
<div className = "app_buddy">
<Sidebar/>
<Chat/>
</div>
</div> 
);
};

export default App;