
export const useCookie = () => ({

    getItem: (key: string) => {
        return document.cookie.split("; ").reduce((total, currentCookie) => {
            const item = currentCookie.split("=");
            const storedKey = item[0];
            const storedValue = item[1];

            return key === storedKey ? decodeURIComponent(storedValue) : total;
        }, "");
    },

    setItem: (key: string, value: string, numberOfDays: number) => {
        const now = new Date();

        // set the time to be now + numberOfDays
        now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);

        document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
    },

    clearCookie: (key:string) =>{
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
})