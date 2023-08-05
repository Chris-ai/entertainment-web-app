'use client'
import SearchInput from "@/components/common/SearchInput";
import TrendingSlider from "@/components/home/TrendingSlider";
import Recommendations from "@/components/home/Recommendations";
import {MediaEntity} from "@/app/api/media/types";
import React, {useEffect, useState} from "react";
import {getRecommendations, getTrending} from "@/service/media/mediaService";
import LoadingSquares from "@/components/common/LoadingSquares";

const Home: React.FC = () => {
    const [query, setQuery] = useState<string>('')
    const [trending, setTrending] = useState<MediaEntity[]>([]);
    const [recommendations, setRecommendations] = useState<MediaEntity[]>([]);
    const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);

    const fetchData = async (query?: string) => {
        setIsMediaLoading(true)
        Promise.all([getTrending(), getRecommendations()]).then(values => {
            setTrending(values[0]);
            setRecommendations(values[1])
        }).then(() => setIsMediaLoading(false)).catch(e => console.error(e));
    }

    useEffect(() => {
        fetchData()
    }, [])

    const search = (query: string) => {
        setQuery(query)
        fetchData(query)
    }

    return (
        <div className={'flex flex-col gap-y-6 w-full py-6 lg:py-10 overflow-x-auto'}>
            <SearchInput search={search}/>
            {isMediaLoading
                ? <div className={'flex justify-center items-center'}>
                    <LoadingSquares/>
                </div>
                : <>
                    <TrendingSlider trending={trending}/>
                    <Recommendations recommendations={recommendations}/>
                </>

            }

        </div>
    )
}

export default Home;