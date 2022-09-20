 const STORAGE_KEY = 'order-management';

 export default {
    setItem(key: string, value: undefined, module_name: undefined){
        if (module_name) {
            let val = this.getItem(key, module_name);
            val[key] = value;
            this.setItem(key, val, module_name);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }  
    },
    getItem(key: string, module_name: undefined){
        if (module_name) {
            let val : object = this.getItem(key, module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key: string | number, module_name: string | number){
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        this.setItem(key, module_name, val);
    },
 }