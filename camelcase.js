function camelcase(s) {
    // Write your code here
    let count = 0;
    let countupper = 0;
    const chara = /\W/;
    if(!s) return "Input anda kosong";

    if(typeof s == 'string'){
        if(chara.test(s)) return "Inputan mengandung spesial karakter";
        if(s[0] == s[0].toUpperCase() && s !== s.toUpperCase()) return "Huruf pertama bukan lowercase";
        if(s == s.toUpperCase()) return "Semua huruf uppercase";
        if(s.length >= Math.pow(10,5)) return "Panjang string tidak boleh melebihi 10^5";
        if(typeof s === 'string'){
            for(let i=0; i<s.length;i++){
                if(s[i] == s[i].toUpperCase()){
                    count++;
                }
            }
            return count+1;
        }
    }
    return "Inputan anda bukan string"
}

export default camelcase;