function calculate_median(arr) {
  //请勿改动函数名
    var x = new Array();
    for(var i = 1,j = 0;i < arr.length;i=i+2,j++){
        x[j]=arr[i];
    }
    x.sort(function(v1,v2){
        return v2-v1;
    })
    alert(x.length);
    var len = x.length;
    if(x.length%2 == 0){
        return (x[len/2-1]+x[len/2])/2;
    }else{
        return x[Math.floor(len/2)];
    }
}

module.exports = calculate_median;
