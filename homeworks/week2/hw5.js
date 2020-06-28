function join(arr, concatStr) {
    if( arr.length === 0 ){
        return ''
  }
    var result = arr[0]
    for(var i = 1; i < arr.length; i++){
        result += concatStr + arr[i]
    }
    return result

}
console.log(join(['a','b','c'], '!'));


function repeat(str, times) {
  var result = ''
  for(i = 0; i <= times; i++){
        result += str
  }
    return result
}


console.log(repeat('a', 5));
