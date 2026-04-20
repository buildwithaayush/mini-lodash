function deepClone(value){
    // Base case: primitives
    if(value === null || typeof value !== 'object' ){
        return value;
    }

    if(Array.isArray(value)){
        const ans =  value.map(item => deepClone(item))
        return ans;
    }

    const cloned = {};
    for(const key in value){
        if(Object.prototype.hasOwnProperty.call(value,key)){
            cloned[key] = deepClone(value[key]);
        }
    }

    return cloned;

}

module.exports = { deepClone };

