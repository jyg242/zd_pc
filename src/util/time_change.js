export default function time_change(item){
    let res =new Date(item).toLocaleString('chinese',{hour12:false})
    let res1=res.split('/').join('-')
    return res1
}