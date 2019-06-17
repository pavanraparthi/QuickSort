// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Quick Sort</h1>`;
var arr = [5,2,6,8,10,1,25,7,12];
function qSort(arr){
  if(arr.length <= 1)
    return arr;
  var leftArr = [];
  var rightArr = [];
  const[pivot,...res]= arr;
  res.forEach(num => (num > pivot) ? rightArr.push(num) : leftArr.push(num));
  return qSort(leftArr).concat(pivot).concat(qSort(rightArr));
}
console.log(qSort(arr));