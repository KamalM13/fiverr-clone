import { useState, useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { RegisterForm } from './registerSection';

type Country = {
    name: string;
    flags: string;
};


interface CountryDropDownProps {
    handleCountry: UseFormRegister<RegisterForm>;
}

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


    return (
        <div className='flex items-center gap-x-3'>
            {selectedCountry && (
                <div>
                    <img src={countries.find(country => country.name === selectedCountry)?.flags} alt="Country flag" className='w-[60px] h-[36px] shadow-lg rounded' />
                </div>
            )}
            <select value={selectedCountry} className='w-full p-2 rounded' {...handleCountry('country', { required: true })}
            onChange={(e) => setSelectedCountry(e.target.value)}
            >
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
