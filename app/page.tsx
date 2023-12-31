import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

export const dynamic = "force-dynamic"
interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ( {searchParams}: HomeProps ) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return(
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
    }
try {
  return (
   <ClientOnly>
    <Container>
      <div className="
        pt-24
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
        
        {listings.map((listing) => {
          return(
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing} 
              title={null} 
              createdAt={null}            />
          )
        })}
   
      </div>
      
    </Container> 
    </ClientOnly>
    )}
  catch (error) {
  // パースに失敗した場合のエラーハンドリング
  console.error('Failed to searchParams,:', error);
}      
 
}
export default Home;
