let pi = 3.14; 
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Tính diện tích hình tròn\n" +
        "2. Tính chu vi hình tròn\n" +
        "3. Tính diện tích hình chữ nhật\n" +
        "4.Tính chu vi hình chữ nhật\n" +
        "5. Thoát\n" 
    );
    switch (choice) {
        case "1":
            let radius1 = +prompt("Nhap ban kinh hinh tron");   
            area= pi * radius1;  
            console.log(area);      
            break;
        case "2":
            let radius2 = +prompt("Nhap ban kinh hinh tron");
            let perimeterCircle = 0;
            perimeterCircle = 2 * pi * radius2;
            console.log(perimeterCircle);
            break;
        case "3":
            let a = +prompt("Nhap chieu dai");
            let b = +prompt("Nhap chieu rong");
            result = a * b;
            console.log(result);
            break;
        case "4":
            let c = +prompt("Nhap chieu dai");
            let d = +prompt("Nhap chieu rong");
            perimeterRectangle = (c + d)* 2;
            console.log(perimeterRectangle);
            break;
        case "5":
            console.log("Thoát chương trình");
            exit();
            break;            
        default:
            console.log("Lua chon khong hop le");
    }
}