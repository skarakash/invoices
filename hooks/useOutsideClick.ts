import { useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [callback, ref]);

    return ref;
}

export default useOutsideClick;