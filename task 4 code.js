const arrayFirst = [7, 17, 1, 9, 1, 17, 56, 56, 23]
const arraySecond = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
function comparsionArray(arrayFirst,arraySecond){

    const similarFirst = arrayFirst.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    },{})
    const similarSecond = arraySecond.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    },{})

    const similarFirstArray = Object.keys(similarFirst).map((key) => [Number(key), similarFirst[key]]);
    const similarSecondArray = Object.keys(similarSecond).map((key) => [Number(key), similarSecond[key]]);

    const similarCoupleFirst = similarFirstArray.filter(couple => {

        if(couple[1]==2){
            return couple
        }
    })
    const similarCoupleSecond = similarSecondArray.filter(couple => {

        if(couple[1]>=2){
            return couple
        }
    })
    const resultCouple = similarCoupleFirst.filter(elemF => similarCoupleSecond.find(elemS => {
        if(elemF[0]==elemS[0]){
            return elemF
        }
    }))

    const result = resultCouple.map(elem => elem[0])
    
    console.log(result)
}
comparsionArray(arrayFirst,arraySecond)
