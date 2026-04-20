// function debounce(fn , delay){
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(()=>{
//             fn(...args)
//         },delay)
//     }
// }

// setTimeout(()=>console.log('hello'),1000)

function debounce(fn,delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId)
      timeoutId = setTimeout(()=>{
            fn(...args)
        },delay)
    };
}


function throttle(fn,delay){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            fn(...args)
        }
    }
}

function memoize(fn){
    const  cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key] !== undefined){
            return cache[key];
        }
        const result = fn(...args);
        cache[key]=result;
        return result;

    }
}

module.exports = {debounce , throttle , memoize}