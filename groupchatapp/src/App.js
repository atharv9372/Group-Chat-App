//APP.JS//

import React, { useEffect, useState} from "react";
import "./App.css";
import Login from './Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { useStateValue } from './StateProvider';

function App(){
const[{ user },dispatch] = useStateValue();
const [messages, setMessages] = useState([]);

useEffect(() => {
axios.get('/messages/sync').then(response => {
setMessages(response.data);
});
});

useEffect(() => {
      const pusher = new Pusher('6d37844ebc8991776897', {
      cluster: 'ap2'
     });
  
   const channel = pusher.subscribe('messages');
      channel.bind('inserted' , (newMessage) =>{
        alert(JSON.stringify(newMessage));
        setMessages([...messages, newMessage])
      });
 

 return () => {
 channel.unbind_all();
 channel.unsubscribe();
 };

}, [messages]);

 console.log(messages);


return(
<div className = "app">
      {!user ? (
        <Login/>
      ):(
        <div className = "app__body">
          <Router>
            <Sidebar />
            <Switch>  
              <Route path = '/rooms/:roomId'>
                <Chat messages = {messages} />
              </Route>
              <Route path = '/'>
                <Chat messages = {messages}/>
              </Route>
            </Switch>
          </Router>
        </div>
      )}

    
    </div>
);
};

export default App;