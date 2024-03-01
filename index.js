//1. Viết chương trình chạy trên NodeJs tính toán và in ra console các phép tính sau:
//237 + 95; 56 - 247; 67 X 98; 4894 : 45

var tong = 237 + 95;
console.log (tong) 

var hieu = 56 - 247;
console.log (hieu)

var tich = 67 * 98;
console.log (tich)

var chia = 4894 / 45; 
console.log (chia)

//Viết chương trình nhận đầu vào là số năm đi làm của một lập trình viên (có thể tự khởi tạo bằng một biến years_of_experience),
// in ra console trình độ của lập trình viên đó. Biết rằng số năm kinh nghiệm nhỏ hơn hoặc bằng 2 thì gọi là Fresher, nhỏ hơn hoặc
// bằng 4 là Junior, lớn hơn 4 là Senior.
 
var years_of_experience = 6;
if (years_of_experience < 2){
console.log ("fresher");
}
 else if (years_of_experience <= 4){
console.log ("Junioir");
}
else {
    console.log("Senior");
}


//Viết chương trình in ra 100 lần dòng chữ: "I Wanna Grow Old with You"

for (var count = 1 ; count < 100; count ++){
    console.log ("I Wanna Grow Old with You")
}
