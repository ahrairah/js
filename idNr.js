function arrayMischen($arr) {
    var $rand, $tmp;
    for (var $i = 0; $i < $arr.length; $i++) {
        $rand = Math.floor(Math.random() * $arr.length);
        $tmp = $arr[$i];
        $arr[$i] = $arr[$rand];
        $arr[$rand] = $tmp;
    }
    return $arr;
}

function idNr() {
    var $zulZahlen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var $str = "";
    $zulZahlen = arrayMischen($zulZahlen);
    if (Math.floor(Math.random() * 2) === 1) {
        $zulZahlen[1] = $zulZahlen[0];
    } else {
        $zulZahlen[1] = $zulZahlen[0];
        $zulZahlen[2] = $zulZahlen[0];
    }
    $zulZahlen = arrayMischen($zulZahlen);
    for (var $i in $zulZahlen) {
        $str += $zulZahlen[$i];
    }
    $str += checksum($zulZahlen);
    return $str;
}

function checksum(id) {

    var out;
    var i, sum = 0,
            prod = 10;
    for (i = 0; i < 10; i++) {
        sum = (id[i] + prod) % 10;
        if (sum === 0)
            sum = 10;
        prod = (sum * 2) % 11;
    }

    out = 11 - prod;
    if (out === 10)
        out = 0;
    return out;
}

console.log(idNr())
