// // 
// const tambah = (x,y) => x+y;
// console.log(tambah (3,4))

// function string(a,b)(
//     return a + ' ' + b ;
// );
// let jadi= string('halo', 'aira');
// console.log(jadi); 

// function greet (name){
//     console.log('halo, '+ name + '!');
// };
// greet('rawra');

// let person = {
//     fullName : function (){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// let person1={
//     firstName:'aira',
//     lastName:'dwi'
// }

// let fullName = person.fullName.call(person1);
// console.log(fullName);

// let person = {
//     fullName: function(kota, negara) {
//         return this.firstName + ' ' +this.lastName + ' sedang di ' + kota + ', ' + negara + '.';
//     }
// }
// let person1 = {firstName: 'aira',
//     lastName: 'dwi'
// }
// let fullName = person.fullName.apply(person1,['Semarang', 'Indonesia']);
// console.log(fullName);

let person = {
    name: 'aira', 
    city: 'Semarang',
    great:function() {
        return 'halo ' +this.name + ', '+'Selamat Datang Di ' +this.city +'!';
    }
};
let greataira=person.great.bind(person);
console.log(greataira());
