import React,{useState, useEffect} from 'react'

const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return isScrolled;
}

export default useScroll