import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});
   
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
                // console.log('Exchange Rates:', res.rates);
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
        },[currency]);
        
        return data
}
export default UseCurrencyInfo;