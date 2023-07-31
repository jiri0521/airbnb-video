'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import qs from 'query-string';


const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter(); 
    const params = useSearchParams();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params.toString())
        }

        const updateQuery:any = {
            ...currentQuery,
            result: searchQuery
        }
        
        const url = qs.stringifyUrl({
            url:'/',
            query: updateQuery
        }, {skipNull: true})
        router.push(`/search/${url}`)
       
    }

   
  return ( 
  
  <form className='flex justify-center' onSubmit={onSearch}>
   
    <input type='text'
        className="px-4 py-2 min-w-[２５0px] lg:w-[620px] sm:px-5 sm:py-3 flex border rounded-tl-full rounded-bl-full focus:ring-[1px] placeholder:text-zinc-400"
        placeholder='検索...'
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    <div className='bg-zinc-200 cursor-pointer px-5 py-3 rounded-tr-full rounded-br-full' onClick={onSearch}>
        <BiSearch size={20}/>
    </div>
    
  </form>
 
  );
};

export default SearchInput;
