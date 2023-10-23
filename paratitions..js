function pivotFunction(arr){
  
    let pivot = arr[0];
    let left = [];
    let equal =[];
    let right =[];
    
    
    for(let i=0; i<arr.length; i++){
      
      if(arr[i] < pivot){
        left.push(arr[i]);
      }else if(arr[i] === pivot){
        equal.push(arr[i])
      }else{
        right.push(arr[i])
      }
      
    }
      
      return left.concat(equal, right)
      
    
  
  }
  const n = 5;
  const arr = [4, 5, 3, 7, 2];
  const result = pivotFunction(arr);
  console.log(result);