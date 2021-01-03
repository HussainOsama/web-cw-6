// 👇🏻 قم بحل السؤال الأول هنا

function sayHello() {
    var name = ''
    name = prompt("ادخل اسمك")

    if (name == '') {
        alert('مرحبا يا بطل')
    } else {
        alert(`مرحباَ ${name}`)

    }
}

sayHello()