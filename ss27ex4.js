let numbers = [];
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập danh sách số nguyên\n" +
        "2. Tính trung bình các số\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoát"
    );
    switch (choice) {
        case "1":
            let n = +prompt("Nhap so phan tu trong mang");
            numbers = []; // Xóa mảng cũ trước khi nhập mới
            for (let i = 0; i < n; i++) {
                let num = +prompt(`Nhap phan tu thu ${i + 1}`);
                numbers.push(num);
            }
            if (numbers.some(num => !Number.isInteger(num))) {
                console.log("Khong phai so nguen");
                numbers = []; 
            } else {
                console.log(numbers);
            }
            break;
        case "2":
            if (numbers.length === 0) {
                console.log("Danh sach trong");
            } else {
                let sum = numbers.reduce((acc, num) => acc + num, 0);
                console.log(`${sum / numbers.length}`);
            }
            break;
        case "3":
            let evenNumbers = numbers.filter(num => num % 2 === 0);
            if (evenNumbers.length === 0) {
                console.log("Khong co so chan");
            } else {
                let maxEven = evenNumbers.reduce((acc, cur) => (cur > acc ? cur : acc), evenNumbers[0]);
                console.log(`${maxEven}`);
            }
            break;
        case "4":
            let oddNumbers = numbers.filter(num => num % 2 !== 0);
            if (oddNumbers.length === 0) {
                console.log("Khong co so le");
            } else {
                let minOdd = oddNumbers.reduce((acc, cur) => (cur < acc ? cur : acc), oddNumbers[0]);
                console.log(`${minOdd}`);
            }
            break;
        case "5":
            console.log("Thoát chương trình");
            exit();
            break;
        default:
            console.log("Lua chon khong hop le");
    }
}