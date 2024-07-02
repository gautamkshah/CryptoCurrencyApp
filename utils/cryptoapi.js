import { isMethodDeclaration } from 'typescript';
import {XRapidAPIHost,XRapidAPIKey,XRapidAPINewsHost} from './api'
import axios from 'axios'

//Endpoints

const apiBaseurl = "https://coinranking1.p.rapidapi.com"

const coinsurl ='${apiBaseurl}/coins?referenceCurrencyUuid=yhjMzLPhuID1&timePeriod=24h&tiers[0]=1&orderBy=marketCap&orderDirection=desc&limit=30&offset=0';


const CryptoApiCall = async (Endpoints,params) => {
    const options={
         method: 'GET',
         url: Endpoints,
         params: params? params : {},
         headers:{
            "X-RapidAPI-Key": '${XRapidAPIKey}',
            "X-RapidAPI-Host": '${XRapidAPIHost}'
         },
    };
    try{
        const response =await axios.request(options);
        return response.data;

    }
    catch(error){
        console.error(error);
        return {}
    }
}

export const FetAlllCoins = async () => {
    return await CryptoApiCall(coinsurl);

}