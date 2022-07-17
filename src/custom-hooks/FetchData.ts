import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';

// Fetching Hero Data through villain api routes
export const useGetDataHeroes = () => {
    const [heroData, setHeroData] = useState<any>([])

    const handleDataFetch = async () =>{
        const result = await serverCalls.getHeroes();
        setHeroData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return { heroData, getHeroData:handleDataFetch }
}



// Fetching Villain Data through villain api routes
export const useGetDataVillains = () => {
    const [villainData, setVillainData] = useState<any>([])

    const handleDataFetch = async () =>{
        const result = await serverCalls.getVillains();
        setVillainData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return { villainData, getVillainData:handleDataFetch }
}