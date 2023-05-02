import { useEffect, useRef, } from 'react'


interface Props {
    loadMore: () => void;
    currentPage: React.MutableRefObject<number>;
}


export const InfiniteScroll = (props: Props) => {

    const containerRef = useRef(null);
    

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "50px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver((entities) => {
            const target = entities[0];

            if (target.isIntersecting) {
                props.currentPage.current += 1;
                props.loadMore();


            }

        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        }

    }, [])


    


    return <div ref={containerRef}></div>
}