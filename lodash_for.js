const _ = require('lodash')


const lists = [
    { name: 'バナナ', price: '100' },
    { name: 'リンゴ', price: '200' },
    { name: 'メロン', price: '400' },
    { name: 'ブドウ', price: '250' },
    { name: '謎ブドウ', price: '300' },
]


_.forEach(lists, function (value) {
//    console.log(value)
})

// ES5
_.forEach(lists, (value) =>  {
//    console.log(value)
})


_.forEach(lists, (v) => {
    //console.log(v)

    // 300未満は弾く
    // if(v.price < 300) return      // continue

    if (v.price > 300) return false     // break

    // if (v.price > 300)  return false //break
    // if (v.price > 200) return //continue
  
    console.log(v)
})
