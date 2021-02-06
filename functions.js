document.onkeydown = function(e) {
    var key_value = e.key;
    var zz=/^[a-z]+$/;
    var flag=zz.test(key_value);
    if (flag){
        key_value = key_value.toUpperCase();
        document.getElementById(key_value).play();
        return;
    }

    var AA=/^[A-Z]+$/;
    flag=AA.test(key_value);
    if (flag){
        document.getElementById(key_value).play();
        return;
    }

    if (!isNaN(key_value)) {
        document.getElementById(key_value).play();
        return;
    }
    console.log('unknown Key is not found!');
};
