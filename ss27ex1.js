let a = +prompt("Nhap so thu nhat");
let b = +prompt("Nhap so thu hai");
let result;
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Cộng hai số\n" +
        "2. Trừ hai số\n" +
        "3. Nhân hai số\n" +
        "4. Chia hai số\n" +
        "5. Thoát\n" 
    );
    switch (choice) {
        case "1":
            result = a + b;  
            console.log(result);      
            break;
        case "2":
             result = a - b;  
             console.log(result);
            break;
        case "3":
             result = a * b;
             console.log(result);
            break;
        case "4":
            if(b === 0){
                console.log("Khong chia cho 0");     
            }else{
                result = a / b;  
                console.log(result);
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

