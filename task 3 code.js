function computers(num){
    const numString = String(num)
    const lengthNum = numString.length

    const lastNum = numString[lengthNum-1]
    const beforeLastNum = numString[lengthNum-2]

    if(lastNum > 1 && lastNum < 5 && beforeLastNum != 1){
        console.log(num + " комьютера")
    }
    if(lastNum == 1 && beforeLastNum != 1){
        console.log(num + " комьютер")
    }
    if((lastNum >= 5 && lastNum <= 9) || (lastNum == 0) || (lastNum == 1 && beforeLastNum == 1) || (lastNum >= 2 && lastNum <= 4 && beforeLastNum != 1)){
        console.log(num + " комьютеров")
    }
}
computers(11)
computers(112)
computers(1113)
computers(14)
computers(115)
computers(1116)
computers(17)
computers(118)
computers(1119)
computers(22)
computers(25)
computers(41)
computers(21)
computers(9)
computers(1)
computers(121)
computers(521)
computers(1181)
computers(1048)

