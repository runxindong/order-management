 const DAY_SECONDS = 24 * 60 * 60 * 1000

 const writeTime = new Date().getTime()
 
 const storage = {
    setItem: (key: string, value: any, expire: number = 7) => {
        const obj = {
            key, value, writeTime, expire
        }
        localStorage.setItem(key, JSON.stringify(value))
    },
    getItem: (key: string) => {
        let val = localStorage.getItem(key);
        if (val === null || typeof val === 'undefined') {
            return null;
        }
        const result = JSON.parse(val);
        const readTime = new Date().getTime();
        if ((readTime - result.writeTime) / DAY_SECONDS > result.expire) {
            localStorage.removeItem(key);
            return null;
        } else {
            return result.value;
        }
    },
    deleteItem:(key:string) => {
        if (!key) return;
        localStorage.clearItem(key);
    },
 }

 export default storage