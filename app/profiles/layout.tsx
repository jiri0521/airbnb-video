import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ActiveStatus from "../components/ActiveStatus";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "../conversations/components/ConversationList";


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
      
        
        {children}
        
      </div>
      
    </Sidebar>

  );
}