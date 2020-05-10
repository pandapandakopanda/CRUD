const calcClass = (obj) => Object.keys(obj).filter(key => !!obj[key] ).join(' ') 

export {
    calcClass,
}