let students = [];
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập danh sách sinh viên\n" +
        "2. Hiển thị danh sách sinh viên\n" +
        "3. Tìm sinh viên theo tên\n" +
        "4. Xóa sinh viên khỏi danh sách\n" +
        "5. Thoát\n" 
    );
    switch (choice) {
        case "1":
            let n = +prompt("Nhap so luong sinh vien trong mang:");
            for (let i = 0; i < n; i++) {
                let num = prompt(`Nhap sinh vien thu ${i + 1}:`);
                students.push(num);
            }
            break;
        case "2":
            if (students.length === 0) {
                console.log("Mang trong");
            } else {
                console.log("Mang hien tai: " + students.join(","));
            }
            break;
        case "3":
            let foundStudent = prompt("Nhap ten sinh vien can tim");
            const findStudent = students.find((value) => value === foundStudent);
            if(findStudent){
                console.log(findStudent);            
            }else{
                console.log("sinh viên không có trong danh sách");
            }    
            break;
        case "4":
            let deleteName = prompt("Nhap ten sinh viên can xoa").trim();
            let index = students.findIndex(student => student.toLowerCase() === deleteName.toLowerCase());
            if (index !== -1) {
                students.splice(index, 1);
                console.log(students);
            } else {
                console.log("sinh viên không có trong danh sách");
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