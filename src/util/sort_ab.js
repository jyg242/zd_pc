export default function compare(property){
    return function(a,b){
        let value1=a[property]
        let value2=b[property]
        return value1-value2
    }
}