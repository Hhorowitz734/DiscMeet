import { BsChevronDown } from 'react-icons/bs'


export default function ScrollBtn({destinationPage}) {

    //Function to control scroll button
    const scrollToPage = (pageHook) => {
        const scrollTopPosition = pageHook.current.offsetTop - 200;
        window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
    }

    return (
        <div className={`w-12 h-12 rounded-lg cursor-pointer hover:text-richblack hover:bg-white transition duration-200 flex justify-center items-center text-4xl`} onClick = {() => scrollToPage(destinationPage)}>
            <BsChevronDown />
        </div>  
    )
}