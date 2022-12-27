import { useLocation } from 'react-router-dom';

const getCurrentPage = () => {
    
    const location = useLocation();
    const getCurrentPage: string[] = location.pathname.split('/')
    const currentPage: string[] = getCurrentPage

    return currentPage
}

export default getCurrentPage

