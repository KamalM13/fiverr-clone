import { useState, useEffect } from 'react';

type Country = {
    name: string;
    flags: string;
};

interface CountryDropDownProps {
    handleCountry: (country: string) => void;
}

// Accept props in the function component
const CountryDropDown = ({ handleCountry }: CountryDropDownProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then((response) => response.json())
            .then((data) => {
                const formattedCountries = data.map((country: any) => ({
                    name: country.name.common,
                    flags: country.flags.png,
                })).sort((a: Country, b: Country) => a.name.localeCompare(b.name));
                setCountries(formattedCountries);
            })
            .catch((error) => console.error('Error fetching countries:', error));
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedCountry = event.target.value;
        setSelectedCountry(newSelectedCountry);
        // Call the handleCountry function to return the selected country to the parent component
        handleCountry(newSelectedCountry);
    };

    return (
        <div className='flex items-center gap-x-3'>
            {selectedCountry && (
                <div>
                    <img src={countries.find(country => country.name === selectedCountry)?.flags} alt="Country flag" className='w-[60px] h-[36px] shadow-lg rounded' />
                </div>
            )}
            <select value={selectedCountry} onChange={handleChange} className='w-full p-2 rounded'>
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryDropDown;
