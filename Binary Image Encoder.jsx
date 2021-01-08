  
var path = "D:/Работы АЕ/Vh. 22 Smart Keyframe Reverse/Graphics/Compact UI v2.0/Badges/";
var subolder="Binary Badges"
var name= "03 Reverse Explorer"

//-----------------------------------------------
var f = File(path+name+".png");
f.encoding = 'BINARY'
f.open('e');

var strlength;
var binary;
strlength= binary.length; //определить длину строки
binary=binary.substring(12, strlength); //удалить первые 12 символов из строки
binary=binary.slice(0, -2); //удалить 2 последних символа

var myFile = new File(path+subolder+"/"+name+".txt");
        myFile.open("w");
        myFile.encoding = "UTF-8";
        myFile.write(binary);
        myFile.close();

$.writeln(binary);

f.close();