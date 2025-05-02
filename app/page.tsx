'use client'
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<'login' | 'chatroom' | null>(null);
  return (
<>
{selectedSection === 'login' ? (
  <Login/>
) : 
selectedSection === 'chatroom' ? (
  <ChatRoom/>
) : (
  <div className="w-full ">
  <Header
  setSelectedSection={setSelectedSection}
  />
 </div>
)

}
</>
  );
}
