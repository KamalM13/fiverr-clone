import { useState, useEffect } from 'react';

interface CountryData {
    flags: string[];
}

const useCountryFlag = (countryName: string | null): string | null => {
    const [flagUrl, setFlagUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlagUrl = async () => {
            try {
                if (countryName) {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=flags`);
                    const data: CountryData[] = await response.json();
                    const flagUrl = data[0]?.flags[0];
                    console.log(flagUrl);
                    setFlagUrl(flagUrl);
                }
            } catch (error) {
                console.error('Error fetching flag URL:', error);
                setFlagUrl(null);
            }
        };

        fetchFlagUrl();
    }, [countryName]);

    return flagUrl;
};

export default useCountryFlag;
