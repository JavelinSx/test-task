const cityArray = ['Абаза', 'Абакан', 'Абдулино', 'абинск', 'Агидель', 'Агрыз', 'адыгейск', 'Азнакаево', 'Азов', 'Ак-Довурак', 'Аксай', 'Алагир', 'Алапаевск'] 
function cityMass(array){
    array[array.length-1] = array[array.length-1]+'.'
    const resultArray = []
    array.forEach(element => {
        resultArray.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    const cityString = resultArray.toString()
    const result = cityString.split(',').join(', ')
    console.log(result)
}
cityMass(cityArray);

