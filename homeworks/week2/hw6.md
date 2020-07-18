``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

執行流程
1.宣告一個函式，名稱為 `isValid` 裡面的參數為 `arr`。
2.執行一個`for`迴圈，初始條件為 `i = 0` ，中止條件為 `i < 陣列長度` ，每做完一次就執行 `i + 1`，如果 arr 陣列 裡的 i 小於等於 0 就回傳 'invalid'。 

 ```js
  (1) i = 0，且 0 小於陣列長度6，不符合終止條件， 
      執行 arr[0] 為 3 ，不小於等於 0 ，所以不 return 'invalid'，i+1。  

  (2) i = 1 ，且 1 小於陣列長度 6，不符合終止條件，
     執行 arr[1] 為 5 ，不小於等於 0 ，所以不 return 'invalid'，i+1。

  (3) i = 2 ，且 2 小於陣列長度 6，不符合終止條件，
     執行 arr[2] 為 8 ，不小於等於 0 ，所以不 return 'invalid'，i+1。

  (4) i = 3 ，且 3 小於陣列長度 6，不符合終止條件，  
     執行 arr[3] 為 13 ，不小於等於 0 ，所以不 return 'invalid'，i+1。 

  (5) i = 4 ，且 4 小於陣列長度 6，不符合終止條件， 
     執行 arr[4] 為 22 ，不小於等於 0 ，所以不 return 'invalid'，i+1‧

  (6) i = 5 ，且 5 小於陣列長度 6，不符合終止條件，  
     執行 arr[5] 為 35 ，不小於等於 0 ，所以不 return 'invalid'，I+1。 

  (7) i = 6 ，6 不小於陣列長度 6，所以終止for迴圈。 
  
  ```
3.執行下一個`for`迴圈，初始條件為 `i = 2` ，中止條件為 `i < 陣列長度` ，每做完一次就執行 `i + 1`，如果 arr 陣列 裡的第 i 個數，不等於 `i - 1` + `i - 2`的話，就回傳`isValid`。

```js
(1) i = 2 ，且 2 小於陣列長度 6，不符合終止條件，
    執行 arr[2] 為 8 等於  arr[0] 為 3 和  arr[1] 為 5 的總和，i+1。

(2) i = 3 ，且 3 小於陣列長度 6，不符合終止條件，
    執行 arr[3] 為 13 等於  arr[2] 為 5 和  arr[1] 為 8 的總和，i+1。

(3) i = 4 ，且 4 小於陣列長度 6，不符合終止條件，
    執行 arr[4] 為 22 不等於  arr[3] 為 8 和  arr[2] 為 13 的總和

(4)回傳'invalid'





```
