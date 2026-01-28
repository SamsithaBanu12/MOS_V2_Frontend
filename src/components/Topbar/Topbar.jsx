import './Topbar.space.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import profileImage from '../../assets/user-profile.png'
import { useEffect, useState } from 'react';
import { useStation } from '../../context/StationContext';
import { useNavigate } from 'react-router';

const Topbar = () => {
    const [now, setNow] = useState(() => new Date());
    const navigate = useNavigate();
    const { connected, stationMeta } = useStation();

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const utcStr = now.toISOString().replace("T", " ").slice(0, 19);

    return (
        <div className='topbar-wrapper'>
            <div className='utc-time-wrapper'>
                <FaRegCalendarAlt size={25} />
                <span className='utc-time'>{utcStr}</span>
            </div>
            <div className='ground-station-icon'><FaWifi size={25} color={connected ? '#2d9f2d' : '#b73939ff'} /></div>
            <div className='sign-up' onClick={() => navigate('/login')}><img src={profileImage} alt='user-image' /></div>
        </div>
    )
};
export default Topbar;