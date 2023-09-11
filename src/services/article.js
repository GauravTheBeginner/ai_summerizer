import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const rapidapikey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(Headers)=>{
            Headers.set('X-RapidAPI-Key',rapidapikey);
            Headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return Headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
        query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&lenght=30`    
        })
    })
})
export const {useLazyGetSummaryQuery} = articleApi;