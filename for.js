
// 参考

// https://www.sejuku.net/blog/20257


//const _ = require('lodash')

//// パターン１

const array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

//　パターン２

const items = ['バナナ', 'リンゴ', 'メロン', 'ブドウ'];

items.forEach(function (value) {
    // console.log(value)
})

//

const lists = [
    { name: 'バナナ', price: '100' },
    { name: 'リンゴ', price: '200' },
    { name: 'メロン', price: '400' },
    { name: 'ブドウ', price: '250' },
]

// ES5
lists.forEach ((v) => {
    // console.log(v.name)
})


//
//  forEachはfor文と違い、繰り返し処理を中断するbreakやcontinueが使えません。
// 例えば、指定した配列要素を検出した場合にbreakさせる処理を記述してみましょう。

//同じようなことを実現しようとするならfor文を利用するようにしましょう。


//

//

lists.forEach(function (value, index, array) {
// value：配列データの値
// index：配列のインデックス番号
// array：現在処理している配列
    console.log('value:', value)
    console.log('index:', index)
    console.log('array:', array)

})

////

lists.forEach(function (value, index, array) {
    console.log('this:', this)

}, lists)



const lists2 = [1, 2, 3, 4, 5, 6, 7, 8];

lists2.forEach(function (value, index, array) {

    array[index] = value * 2;

});

// console.log(lists2);
