import getAllListings from "../actions/getAllListings"
import getCurrentUser from "../actions/getCurrentUser"
import ClientOnly from "../components/ClientOnly"
import Container from "../components/Container"
import ListingCard from "@/app/components/listings/ListingSearchCard"
import EmptyState from "../components/EmptyState"

export const dynamic = "force-dynamic"
interface HomeProps{
  searchParams: string
}

export default async function page({searchParams}: HomeProps) {
  
 
  const listing = await getAllListings(searchParams)
  const currentUser = await getCurrentUser();
  
  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="動画が見つかりませんでした"
          subtitle="他のキーワードで探してみてね♡"
        />
      </ClientOnly>
    );
  }
  
  return (
  
    <Container>
      <div className="font-semibold text-lg">検索結果</div>
      <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
       

        {listing.map((item:any) => (
          
            <ListingCard
              currentUser={currentUser}
              key={item.id}
              data={item} 
              title={null} 
              createdAt={null}
            />
          
        ))}
   
      </div>
    
    </Container> 
  
    )}
  

