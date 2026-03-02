//const friends =[ "khang" , "an" , "thiện" ]
//friends.push("bảo")
//console.log(friends)
//console.log(friends.length)
//console.log(friends[0])
//friends.unshift("toàn")
//console.log(friends)
//friends.pop()
//console.log(friends)
//friends.splice(1 ,1 ,"thịnh")
//console.log(friends)
//for(let i = 0 ;i<friends.length; i++)
 //   console.log(friends[i])








function countValidCases(memoryUsages, limit) {
    let count = 0;
    for (let i = 0; i < memoryUsages.length; i++) {
        if (memoryUsages[i] <= limit) {
            count++;
        }
    }
    return count;
}
const memoryUsages = [32, 45, 28, 50, 64, 20];
const limit = 40;
console.log(countValidCases(memoryUsages, limit));



