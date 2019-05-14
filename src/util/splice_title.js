export default function splice_title(item,index) {
    if (item.length > 15) {
        let res = item.substr(0, index)
        return res + '...'
    } else {
        return item
    }
}