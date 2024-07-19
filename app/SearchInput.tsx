'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import qs from 'query-string';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const router = useRouter(); 
    const params = useSearchParams();

    const fetchSuggestions = async (query: string) => {
        // ここでAPI呼び出しを行い、予測検索候補を取得します
        // 例: const response = await fetch(`/api/suggestions?query=${query}`);
        // const data = await response.json();
        // setSuggestions(data.suggestions);
        
        // デモ用の固定候補
        const demoSuggestions = ["車椅子", "ベッド", "食べさせ方" , "立ち上がり", "誤嚥サインの見つけ方", "とろみの付け方", "ズボンの脱ぎ履き","座っている人","寝かせる","座る動き","乗り移る" ];
        setSuggestions(demoSuggestions.filter(s => s.includes(query)));
    };

    useEffect(() => {
        if (searchQuery) {
            fetchSuggestions(searchQuery);
        } else {
            setSuggestions([]);
        }
    }, [searchQuery]);

    const onSearch = (event: React.FormEvent, query: string) => {
        event.preventDefault();

        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params.toString())
        }

        const updateQuery:any = {
            ...currentQuery,
            result: query
        }
        
        const url = qs.stringifyUrl({
            url:'/',
            query: updateQuery
        }, {skipNull: true})
        router.push(`/search/${url}`)
    }

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setTimeout(() => {
            onSearch(new Event('submit') as unknown as React.FormEvent, suggestion);
        }, 0);
    };

    return ( 
        <div className="relative">
            <form className='flex justify-center' onSubmit={(e) => onSearch(e, searchQuery)}>
                <input type='text'
                    className="px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex border rounded-tl-full rounded-bl-full focus:ring-[1px] placeholder:text-zinc-400"
                    placeholder='検索...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className='bg-zinc-200 cursor-pointer px-5 py-3 rounded-tr-full rounded-br-full' onClick={(e) => onSearch(e, searchQuery)}>
                    <BiSearch size={20}/>
                </div>
            </form>
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border mt-1 w-full max-w-[620px] rounded-md shadow-lg">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
