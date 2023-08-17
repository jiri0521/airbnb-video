import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import AuthContext from '../context/AuthContext'
import ActiveStatus from "../components/ActiveStatus";

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
        <Sidebar>
      <div className="h-full">
       <ActiveStatus /> 
        <ConversationList 
          users={users} 
          title="トーク" 
          initialItems={conversations}
        />
        
        {children}
        
      </div>
      
    </Sidebar>

  );
}
