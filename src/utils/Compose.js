const Compose = (...funcs)=>(comp)=>{
    return funcs.reduceRight(
        (wrapped,f) =>f(wrapped),comp)
}

export default Compose