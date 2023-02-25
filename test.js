// O(n*log(n))

console.time('TIME')
function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    function merge(left, right) {
      let result = [];
  
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
  
      while (left.length) {
        result.push(left.shift());
      }
  
      while (right.length) {
        result.push(right.shift());
      }
  
      return result;
    }
  
    return merge(mergeSort(left), mergeSort(right));
  }
  console.timeEnd('TIME')
  