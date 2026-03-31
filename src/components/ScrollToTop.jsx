import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackVirtualPageView } from '../utils/ecommerceTracker';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Push virtual page view for SPA tracking with GTM
        // Delay slightly to ensure <PageMeta> has already updated the document title
        setTimeout(() => {
            trackVirtualPageView(window.location.href, document.title);
        }, 100);
        
    }, [pathname]);

    return null;
};

export default ScrollToTop;
