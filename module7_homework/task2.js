function checkObject (string, obj) {
    for (let key in obj) {
        if (string === obj[key]) {
            return true ;
        }else {
            return false ;
        }
    }
}
checkObject ('Alex' , {1: 'Paramonov', 2: 2 });