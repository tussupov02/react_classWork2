export const fetchCourse = async()=>{
try{
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=4679facea3c5f072299e7cdf047b1b00`)
    
    if(res.status ===200){
        return res.json();
    }
}catch(e){
    console.log(e)
}
}