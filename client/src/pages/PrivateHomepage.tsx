import { useContext, useEffect, useState } from 'react';
import { CurrentExchange } from '../components/CurrentExchange';
import { HistoricCard } from '../components/HistoricCard';
import { Navbar } from '../components/Navbar';
import { PrivateHomepageContext } from '../contexts/PrivateHomepageContext';
import { api } from '../services/api';
import { CurrentConverterValue } from '../types/CurrencyConverterItem';


export const PrivateHomepage = () => {
    const {setHistoric} = useContext(PrivateHomepageContext)

    useEffect(() => {

        api.get("/history/one", {
            headers: {
                token: localStorage.getItem("@token") || ""
            }
        }).then(response => {
            console.log(response.data.histories)

            setHistoric(response.data.histories)

        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="container w-50">
                <CurrentExchange />
                <HistoricCard />

            </div>
        </>
    );
};