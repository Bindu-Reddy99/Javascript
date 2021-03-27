
// A JavaScript program to move all zeroes at the end of array
 //Algorithm
 //set count as zero
 //In a loop traverse the given array to find non zero element,if found then replace with element at index 'count'(repeat looop till end)
//All non zero elements shifted to front and count again set to 0.
 // Function which pushes all zeros to end of an array.
function pushZerosToEnd(arr, n)
{
    let count = 0; 
 
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i]; 
 
    while (count < n)
        arr[count++] = 0;
}
 
// Driver code
    let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
    
    pushZerosToEnd(arr, arr.length);
    document.write("Array after pushing all zeros to end of array :<br>");
    for (var i = 0; i < n; i++)
        document.write(arr[i] + " "); 
 