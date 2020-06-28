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

## 執行流程
1.執行函式 `isValid()`  
2.並將`[3, 5, 8, 13, 22, 35]`轉為參數`arr`  
3.執行For迴圈  
  (1)宣告初始值 `i` 等於 `0`  
  (2)終止條件為 `i` 小於 `arr` 的屬性 `length`  
  (3)每次回圈結束後,`i` 加上1(遞增)  
4.執行回圈內的`if`判斷式  
  (1)如果 `arr`的第`i`個元素值 小於等於0,則回傳字串`invalid`並退出函式  
  (2)重複執行迴圈直到中止條件或`if`判斷式條件被滿足  
    第一圈: i為0,進行if判斷式arr[i]不為0,i小於arr.length,i+1(遞增),進行下一圈  
    第二圈: i為1,進行if判斷式arr[i]不為0,i小於arr.length,i+1(遞增),進行下一圈  
    第三圈: i為2,進行if判斷式arr[i]不為0,i小於arr.length,i+1(遞增),進行下一圈  
    第四圈: i為3,進行if判斷式arr[i]不為0,i小於arr.length,i+1(遞增),進行下一圈  
    第五圈: i為4,進行if判斷式arr[i]不為0,i小於arr.length,i+1(遞增)  
    第六圈: i為5,進行if判斷式arr[i]不為0,i不小於arr.length,迴圈結束  
5.條件被滿足,回圈結束,接著進行函式`isValid()`接下來的內容  
6.執行下一個For迴圈  
  (1)宣告初始值 `i` 等於 `2`  
  (2)終止條件為 `i` 小於 `arr` 的屬性 `length`  
  (3)每次回圈結束後,`i` 加上1(遞增)  
7.執行回圈內的`if`判斷式  
  (1)如果 `arr`的第`i`個元素值 不等於前面兩個元素相加,則回傳字串`invalid`並退出函式  
  (2)重複執行迴圈直到中止條件或`if`判斷式條件被滿足  
    第一圈: i為2,進行if判斷式arr[i]等於arr[i-1]+arr[i-2],i小於arr.lenght,i+1(遞增),進行下一圈  
    第二圈: i為3,進行if判斷式arr[i]等於arr[i-1]+arr[i-2],i小於arr.lenght,i+1(遞增),進行下一圈  
    第三圈: i為4,進行if判斷式arr[i]等於arr[i-1]+arr[i-2],i不等於rr.lenght,回圈結束  

    滿足if判斷式,回圈結束,回傳字串`invalid` 迴圈結束!

    完成函式isValid([3, 5, 8, 13, 22, 35])，完成! 