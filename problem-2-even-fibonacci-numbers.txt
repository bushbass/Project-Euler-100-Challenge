function fiboEvenSum(n) {
  let arr = [1,2]
  let i = 0
while (arr.length < n) {
  arr.push(arr[arr.length-1]+ arr[arr.length-2])
  i = arr[arr.length-1]+ arr[arr.length-2]
}
  return arr.filter(item=>item % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue)
}

fiboEvenSum(10);