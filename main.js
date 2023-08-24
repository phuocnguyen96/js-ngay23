var danhsachFruids = [
    {
        name: 'oi',
        price: 20,
    },
    {
        name: 'cam',
        price: 10,
    },
    {
        name: 'xoai',
        price: 30,
    }
]

// danhsachFruids.map((traicay, index) => console.log("danh sach trai cay ",traicay.name))
var sum = 0;
danhsachFruids.map((items, index) => {
    if(items.name === "cam" || items.name === "xoai"){
        sum += items.price
    }
}
)

console.log("tong cua c & x la ", sum)