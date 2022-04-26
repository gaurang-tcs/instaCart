import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IoLocationSharp } from 'react-icons/io5';
import CartDrawer from '../cartdrawer/cartdrawer.component';
import { LocationContext } from '../../providers/location/location.provider';
import { LogInContext } from '../../providers/login/login.provider';
import './styles.css';

const Header = () => {
    const { togglelocHidden } = useContext(LocationContext);
    const { toggleLogInHidden }  = useContext(LogInContext);

    //const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000)
    // }, [])


    return (
        <div className='fixed h-auto flex ml-12 w-full z-10 cursor-pointer bg-white'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                className='mt-4 px-4 py-3 w-36 h-12'
            />

            <div className="flex relative ml-16 mt-4 w-3/4">
                <input
                    type='search'
                    placeholder="Search products, stores, and recipes"
                    className='w-full h-7 decoration-slate-700 bg-white py-6 border-hidden rounded-lg font-semibold '
                />
                <div className="absolute mt-2.5 left-[94%]">
                    <SearchIcon />
                </div>

            </div>

            <div className='flex w-40 mt-4' onClick={togglelocHidden} >
                <IoLocationSharp className='h-6 w-6 mt-[0.6rem] ml-4' />
                <span className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>94105</span>
            </div>

            <div>
                <button className='bg-green-600 w-24 h-12 rounded-3xl text-white mt-3 mr-4 font-semibold' onClick={toggleLogInHidden}>
                    Log in
                </button>
            </div>

            <CartDrawer />

        </div>
    )
};

export default Header;
