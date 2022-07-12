//buatlah sebuah program untuk menampilkan banyak angka yang keluar
//output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10

const mode = arr => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];

      
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
    
    
    return `total data paling banyak keluar adalah ${max} dengan jumlah ${count}`;
  };

var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
console.log(mode([1, 1, 1, 2, 2, 4, 1, 1 ]));

var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
console.log(mode([2, 1, 2, 2, 2, 8, 1, 1 ]));

var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]
console.log(mode([3, 3, 3, 3, 2, 4, 1, 1 ]))
