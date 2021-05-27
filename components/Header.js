import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const inputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = inputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full  p-6 items-center">
            <Image onClick={() => router.push('/')} src="https://ipubuzz.com/wp-content/uploads/2021/03/google2.0.0.jpg" className="cursor-pointer" width={100} height={60} />

                <form className=" flex flex-grow px-6 py-3 ml-10 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={inputRef} className=" flex-grow w-full focus:outline-none" type="text" />
                    <XIcon onClick={() => inputRef.current.value = ""} className="h-7 text-gray-500 cursor-pointer hover:scale-125 transition duration-100 transform mr-3"/>
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://lh3.googleusercontent.com/aksB6McK0YtZkHD6vAd3sr6PjXm2fV6l7BnQOoCtDp5vUOCg3Yh35GJm34tuPcD6fY7yKRS5gds3dEgmWs1OUwQ5wwVcT_APkHZ5Ba6__OG2q14Rm-VUAqHrUqMNQZlsYZb9EtKxxVANs05X8KfQbHCxRhePqpI8gKVrPAg-YPyuaUh7-oHDMsKmZuo2Afw0pR0Lu0Rtre1Y4Wm-PUAvsd_79bWWGz_VXSW6iv8W2m68O7oEycdk2O6XgbZVR7ZPNLbdM7NJB23ysENfVLFTKllbX22AngS74swkH4fSCl8OIoVVAfyS0j11Io2uDaEKkI-ZaViocVPkGtLqepVcmN3khPaoAIQPlJELb097P0bonrGZ-LUwiZPXceBaEv3X2sKxPN-sKXLILl8Ex3dIdnZPPWFP8Z9_C7cBwVqRxD98nkHQV4ne9kKUamTZ2NhdSlFNSA-C9IXL0X2UxrRmqFAJdkqVQ8ulVvESpK3NTF04m7Ga_wAskIEqZ-gyEAWLoWPI31SuD_2Vl15IDdcGsJ4yWVaEAR3sl67dRqCvLrYCx4b8cd2hUl-U6zAhlcOdzn-X-P3nO8jRuQE8vnHvHG0QjVzmjmbFeCdAxYdB_IfIpY5kcu-gaRCq3pOrJR-m-_4JS64dRipPb3v0XwmbGEhh0fLHXAugT8YesWdf_z7PFz0wZoUfBjQW_pHpIzbtBZuvRe7aaEZ7NmkoZzDRdnQ=w600-h600-no?authuser=0"/>

            </div>
            {/**Header options */}
            <HeaderOptions />
        </header>
    )
}

export default Header
