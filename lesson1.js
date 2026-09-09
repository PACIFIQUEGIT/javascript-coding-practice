/*const numbers = [3, 8, 2, 9, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log (numbers[i]);
}*/

/*const numbers = [3, 8, 2, 9, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);*/

/*const numbers = [3, 8, 2, 9, 5];

let largestnumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestnumber) {
        largestnumber = numbers[i];
    }
}
console.log(largestnumber);*/

/*const numbers = [3, 8, 2, 9, 5, 10];

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count ++;
    }
}
console.log(count);*/

/*const numbers = [7, 3, 10, 1, 5];

function findSmallest(numbers) {
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(findSmallest(numbers));*/

/*const numbers = [2, 5, 2, 8, 2, 9, 5];

function countTwos(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 2) {
            count++;
        }
    }
    return count;
}
console.log(countTwos(numbers));*/

/*countNumber([2,5,2,8,2,9,5], 5);

function countNumber(numbers, target) {
    let count = 0;
    for( let i = 0; i < numbers.length; i++) {
        if(numbers[i] === target) {
            count++;
        }
    }
    return count;
}
console.log(countNumber([2,5,2,8,2,9,5], 5));*/

/*const numbers = [7, 4, 9, 2, 11];

function getEvenNumbers(numbers) {
    let evens = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
console.log(getEvenNumbers(numbers));*/

/*const numbers = [4, 7, 2, 9, 1];

function reverseArray(numbers) {
    let reversed = [];
    for(i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    return reversed;
}
console.log(reverseArray(numbers));*/

/*const text = "hello";

function reverseString(text) {
    let reversed = "";
    for(let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}
console.log(reverseString(text));*/

/*sumEven([1, 2, 3, 4, 6]);
function sumEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(sumEven([1, 2, 3, 4, 6]));*/

/*maxNumber([3, 7, 2, 9, 4]);
function maxNumber(numbers) {
    let max = 3;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(maxNumber([3, 7, 2, 9, 4]));*/

/*countVowels("javascript");
function countVowels(str) {
    let vowels = "aioue";
    let count = 0;
    str = str.toLowerCase();
    for (char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count++;
}
console.log(countVowels("javascript"));*/

/*fizzBuzz(5);
function fizzBuzz(n){
    let result = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else {
            result.push(i);
        }
    }
    return result;
}
console.log(fizzBuzz(5));*/
/*removeDuplicates([1, 2, 2, 3, 4, 4]);
function removeDuplicates(numbers) {
    let newArray = [];
    for(let i = 0; i < numbers.length; i++) {
        if(!newArray.includes(numbers[i])) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));*/

/*isPalindrome("A man a plan a canal Panama");
function isPalindrome(str) {
    let result = false;
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let palindrome = str.split("").reverse().join("");
    if(str === palindrome) {
        result = true;
    };
    return result;
}
console.log(isPalindrome("A man a plan a canal Panama"));*/

/*twoSum([2, 7, 11, 15], 9);
function twoSum(numbers, target) {
    let seen = [];
    for(let num of numbers) {
        if(seen.includes(target-num)){
            return true;
        }
        seen.push(num);
    }
    return false;
}
console.log(twoSum([2, 7, 11, 15], 9));*/

/*firstNonRepeating("aabbcdd")
function firstNonRepeating(str) {
    let count = {};
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(let char of str){
        if (count[char] === 1){
            return char;
        }
    }
    return "-";
}
console.log(firstNonRepeating("aabbcdd"));*/

/*let sentence = "I love programming in JavaScript";
let words = sentence.split(" ");
let result = "";
function longestWord(sentence) {
    for(let word of words) {
        if(word.length > result.length) {
            result = word;
        }
    }
    return result;
}
console.log(longestWord("I love programming in JavaScript"));*/

/*let str = "island";
function isUnique(str) {
    let count = {};
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(char of str){
        if(count[char] > 1){
            return false;
        }
    }
    return true;
}
console.log(isUnique("island"));*/

/*function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (count[char]) {
            count[char]--;
        } else {
            return false;
        }
    }

    return true;
}
console.log(isAnagram("listen", "silent"));*/

/*function maxSum(arr, k) {

    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let max = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i-k] + arr[i];
        if(windowSum > max){
            max = windowSum;
        }
    }

    return max;
}

console.log(maxSum([2,1,5,1,3,2],3));*/

/*function reverseWithStack(str) {
    let stack = [];
    for(char of str){
        stack.push(char);
    }
    let reversed = "";
    while(stack.length > 0){
        let letter = stack.pop();
        reversed += letter;
    }
    return reversed;
}
console.log(reverseWithStack("hello"));*/

/*function isValid(str) {

    const pairs = {
        ")":"(",
        "}":"{",
        "]":"["
    };

    let stack = [];

    for (let char of str) {

        if (char === "(" ||
            char === "{" ||
            char === "["
        ) {
            stack.push(char);
        }

        else if (char === ")" ||
            char === "}" ||
            char === "]"
        ) {
            if (stack.length === 0){
                return false;
            }
            let last = stack.pop();
            if (last !== pairs[char]){
                return false;
            }
        }

    }

    return stack.length === 0;
}
console.log(isValid("({[]})"));*/

/*function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        } else if (target > arr[mid]){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;

}

console.log(binarySearch([2,5,8,12,16,23,38,56], 38));*/

/*function sumTo(n) {
    if (n === 1){
        return 1;
    }
    return n + sumTo(n-1);

}
console.log(sumTo(5));*/

/*function factorial(n) {
    if (n === 1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));*/

/*let words = ["kiwi", "pear", "apple", "banana"];
console.log(words.sort((a,b) => a.length - b.length));*/

/*function reversed(arr){
    let result =[];
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    };
    
    return result;
}
console.log(reversed([1,2,3,4,5]));*/

/*function reverseInPlace(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}
console.log(reverseInPlace([1,2,3,4,5]));*/

/*function moveZeros(arr) {

    let write = 0;

    for (let read = 0; read < arr.length; read++) {

        if (arr[read] !== 0) {
            let temp = arr[read];
            arr[read] = arr[write];
            arr[write] = temp;
            write++;

        }
    }

    return arr;
}
console.log(moveZeros([0,1,0,3,12]));*/

/*function secondLargest(arr) {
   let largest = -Infinity;
   let second = -Infinity;
   for (let num of arr){
    if(num > largest){
        second = largest;
        largest = num;
    } else if(num < largest){
        let temp = num;
        if(temp > second){
            second = temp;
        }
    } 
   }
   return second === -Infinity ? -1 : second;
}
console.log(secondLargest([10,10,10]));*/

/*function firstNonRepeating(str) {
    let count = {};
    for (char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for (char of str){
        if(count[char] === 1){
            return char;
        } 
    }
    return "_";
}
console.log(firstNonRepeating("abacabacabaaba"));*/

/*function containsDuplicate(arr) {

    let seen = new Set();

    for (let num of arr) {
        if(seen.has(num)){
            return true;
        } else {
            seen.add(num);
        }
    }

    return false;
}
console.log(containsDuplicate([1, 2, 3, 4, 5]));*/

/*function mostFrequent(arr) {
    let count = {};
    let highest = 0;
    let answer;
    for(let num of arr){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of arr){
        if(count[num] > highest){
            highest = count[num];
            answer = num;
        } 
    }
    return answer;

}
console.log(mostFrequent([1, 2, 3, 4, 5, 5]));*/

/*function removeDuplicates(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let write = 1;

    for (let read = 1; read < arr.length; read++) {
        if (arr[read] !== arr[read - 1]) {
            arr[write] = arr[read];
            write++;
        }
    }

    return write;
}
console.log(removeDuplicates([0,1,1,1,2,2,3,3,4]));*/

/*function solution(state, operations) {
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function concatenateSums(str1, str2){
    let i = str1.length - 1;
    let j = str2.length - 1;
    let result = "";
    while(i >= 0 || j >= 0){
        let a = i >= 0 ? Number(str1[i]) : 0;
        let b = j >= 0 ? Number(str2[j]) : 0;
        let sum = a + b;
        result = String(sum) + result;
        i--;
        j--;
    }
    return result;

}
console.log(concatenateSums("123", "98"));*/

/*function digitsum(num){
    let digits = String(num).split("");
    let sum = 0;
    for(let dig of digits){
        sum += Number(dig);
    }
    return sum;
}
function mostfreqsum(arr){
    let answer;
    let most = -1;
    for(let i = 0; i < arr.length; i++){
        while(arr[i] >= 10){
            arr[i] = digitsum(arr[i]);
        }
    }
    let count = {};
    for(let num of arr){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of arr){
        if(most < count[num] || (count[num] === most && num > answer)){
            most = count[num];
            answer = num;
        }
    }
    return answer;   
}
console.log(mostfreqsum([587, 99, 4]));*/

/*function toMinutes(time) {
    const [hours, minutes] = time.split(":");
    return Number(hours) * 60 + Number(minutes);
}
function timeSinceLastBus(departureTimes, currentTime) {
    let current = toMinutes(currentTime);
    let last = -1;
    for(let departure of departureTimes){
        departure = toMinutes(departure);
        if (departure < current) {
            last = departure;
        }
    }
    if (last === -1) {
        return -1;
    }
    return current - last;
}
console.log(timeSinceLastBus(["08:15", "09:30", "11:45", "16:20"] , "12:10"));*/

/*function validMountain(arr) {
    if(arr.length >= 3){
        let i = 0;
           while ( i < arr.length - 1 && arr[i] < arr[i+1] ) {
                 i++;
           }
           if (i === 0 || i === arr.length - 1) {
              return false;
           }
           while ( i < arr.length - 1 && arr[i] > arr[i + 1] ) {
                 i++;
           }
           return i === arr.length - 1;
    }
    return false;
}
console.log(validMountain([1, 2, 4, 1]));*/

/*function productExceptSelf(nums) {
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if(j !== i){
                product = nums[j] * product;
            }
        }

        answer.push(product);
    }

    return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));*/

/*function productExceptSelf(nums) {

    let prefix = [];
    let suffix = [];
    let answer = [];
    prefix[0] = 1;
    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    suffix[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * nums[i+1]; 
    }
    for(let i = 0; i < nums.length; i++){
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));*/

/*function longestConsecutive(nums) {
    let answer = 0;
    for(let num of nums){
        if(!nums.includes(num-1)){
            let count = 1;
            let current = num;
            while(nums.includes(current+1)){
                count++;
                current++;
            }
        if(count > answer){
            answer = count;
        }
        }
    }
    return answer;
}
console.log(longestConsecutive([1, 2, 4, 5]));*/

/*function longestConsecutive(nums){
    let answer = 0;
    let seen = new Set(nums);
    for(let num of seen){
        if(!seen.has(num-1)){
            let count = 1;
            let current = num;
            while(seen.has(current+1)){
                count++;
                current++;
            }
            if(count > answer){
                answer = count;
            }
        }
    }
    return answer;
}
console.log(longestConsecutive([1, 2, 4, 5]));*/

/*function zigzag(numbers){
    let zig = [];
    for(let i = 0; i < numbers.length - 2; i++){
        if((numbers[i]<numbers[i+1] && numbers[i+1]>numbers[i+2]) || (numbers[i]>numbers[i+1] && numbers[i+1]<numbers[i+2])){
            zig.push(1);
        } else {
            zig.push(0);
        }
    }
    return zig;
}
console.log(zigzag([1, 2, 6, 5]));*/

/*function concatenatedSums(str1, str2){
    let result = "";
    let i = str1.length - 1;
    let j = str2.length - 1;
    while(i >= 0 || j >= 0){
        let a = (i >= 0) ? Number(str1[i]) : 0;
        let b = (j >= 0) ? Number(str2[j]) : 0;
        let sum = a + b;
        result = String(sum) + result;
        i--; 
        j--;
    }
    return result;
}
console.log(concatenatedSums("123", "98"));*/

/*function elofoddoczeros(a){
    let result = 0;
    for(let num of a){
        num = String(num);
        let occ = 0;
        for(let dig of num){
            if(dig == "0"){
                occ++;
            }
        }
        if(occ % 2 !== 0){
            result++;
        }
    }
    return result;
}
console.log(elofoddoczeros([4,50,100,65,2000,700,1,10]));*/

/*function nextShuttle(schedule, currentTime) {
    for(let departure of schedule){
        if(departure >= currentTime){
            return departure;
        } 
    }
    return -1;
}
function finishTime(alpha2beta, beta2alpha, missions) {
    let departure1;
    let departure2;
    let currentTime = 0;
    while(missions > 0){
        departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(finishTime([0, 300], [150, 500], 2));*/

/*function maxProfit(prices){
    let min = prices[0];
    let max = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        if(prices[i] > min){
            let profit = prices[i] - min;
            if(profit > max){
                max = profit;
            }
        }
    }
    return max;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));*/

/*function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let palindrome = s.split("").reverse().join("");
    return palindrome === s;
}
console.log(isPalindrome("racecar"));*/

/*function isPalindrome(s){
s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
let left = 0;
let right = s.length - 1;
while (left < right) {
    if (s[left] !== s[right]) {
        return false;
    }
    left++;
    right--;
}
return true;
}
console.log(isPalindrome("racecar"));*/

/*function lengthOfLongestSubstring(s) {
   let left = 0;
   let seen = new Set();
   let longest = 0;
   let substring;
   for(let right = 0; right < s.length; right++){
    let char = s[right];
    while(seen.has(char)){
        seen.delete(s[left]);
        left++;
    }
    seen.add(char);
    substring = right - left + 1;
    if(substring > longest){
        longest = substring;
    }
   }
   return longest;
}
console.log(lengthOfLongestSubstring("abcdcefkl"));*/

/*function threeSum(nums) {
    nums = nums.sort((a,b)=>a-b);
    let result = [];
    let sum;
    for(let i = 0; i < nums.length; i++){
        let left = i + 1;
        let right = nums.length - 1;
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        while(left < right){
            sum = nums[i] + nums[left] + nums[right];
            if(sum < 0){
                left++;
            } else if(sum > 0){
                right--;
            } else {
                result.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))*/

/*function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while(left <= right){
        mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            left = mid + 1;
        } else{
            right = mid - 1;
        }

    }
    return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 2));*/

/*function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
console.log(findPeakElement([1]));*/

/*function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
console.log(searchInsert([1,3,5,6], 2));*/

/*function isAnagram(s,t){
       if(s.length !== t.length){
        return false;
       }
       let count = {};
       for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
       }
       for(let ch of t){
        if(count[ch]){
            count[ch]--;
        } else {
            return false;
        }
       }
       return true;
}
console.log(isAnagram("anagram", "nagaram"));*/

/*function duplicates(nums){
    let seen = new Set();
    for(let num of nums){
        if(!seen.has(num)){
            seen.add(num);
        } else {
            return true;
        }
    }
    return false;
}
console.log(duplicates([1,2,3,1]));*/

/*function validbrackets(s){
    const pairs = {
        "(" : ")", "{" : "}", "[" : "]"
    }
    let stack = [];
    for(let ch of s){
        if(ch === "(" || ch === "{" || ch === "["){
            stack.push(ch);
        } else {
            let last = stack.pop();
            if(pairs[last] !== ch){
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validbrackets("()[]{}"));*/

/*function mergeArrays(s, t){
    let n = [];
    for(let num of s){
        n.push(num);
    }
    for(let num of t){
        n.push(num);
    }
    return n.sort((a,b)=>a-b);
}
console.log(mergeArrays([0,1,2], [2,4,5]));*/

/*function mergeArrays(s, t){
    let i = 0;
    let j = 0;
    let n = [];
    while(i < s.length && j < t.length){
        if(s[i] < t[j]){
            n.push(s[i]);
            i++;
        } else {
            n.push(t[j]);
            j++;
        }
    }
    while(i < s.length){
        n.push(s[i]);
        i++;
    }
    while(j < t.length){
        n.push(t[j]);
        j++;
    }
    return n;
}
console.log(mergeArrays([0,1,2], [2,4,5,7,8,9]));*/

/*function productArray(nums){
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(j !== i){
                product = nums[j] * product;
            }
        }
        answer.push(product);
    }
    return answer;
}
console.log(productArray([1,2,3,4]));*/

/*function productArray(nums){
    let prefix = [];
    let suffix = [];
    let answer = [];
    prefix[0] = 1;
    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    suffix[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * nums[i+1];
    }
    for(let i = 0; i < nums.length; i++){
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
}
console.log(productArray([1,2,3,4]));*/

/*function mostfreqintegers(nums, k){
    let result = [];
    let count = {};
    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
    }
    let entries = Object.entries(count);
    entries.sort((a,b)=>b[1]-a[1]);
    for(let i = 0; i < k; i++){
        result.push(Number(entries[i][0]));
    }
    return result;
}
console.log(mostfreqintegers([1,1,1,2,2,3], 2));*/

/*function groupAnagrams(strs){
    let groups = {};
    for(let word of strs){
        let key = word.split("").sort().join("");
         if(!groups[key]){
            groups[key] = [];
         }
        groups[key].push(word);
    }
    return Object.values(groups);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));*/

/*function dfs(grid, row, col) {

    if (
        row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[0].length
    ) {
        return;
    }

    if (grid[row][col] === 0) {
        return;
    }

    grid[row][col] = 0;

    dfs(grid, row - 1, col); // Up
    dfs(grid, row + 1, col); // Down
    dfs(grid, row, col - 1); // Left
    dfs(grid, row, col + 1); // Right
}

function numIslands(grid) {
    let islands = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {

            if (grid[row][col] === 1) {
                islands++;
                dfs(grid, row, col);
            }

        }
    }

    return islands;
}*/

/*function isValidSudoku(board) {
    for(let row = 0; row < 9; row++){
        let seen = new Set();
        for(let col = 0; col < 9; col++){
            let cell = board[row][col];
            if(cell === "."){
                continue;
            }
            if(seen.has(cell)){
                return false;
            }
        seen.add(cell);
        }
    }
    for(let col = 0; col < 9; col++){
        let seen = new Set();
        for(let row = 0; row < 9; row++){
            let cell = board[row][col];
            if(cell === "."){
                continue;
            }
            if(seen.has(cell)){
                return false;
            }
            seen.add(cell);
        }
    }
    for(let boxrow = 0; boxrow < 9; boxrow += 3){
        for(let boxcol = 0; boxcol < 9; boxcol += 3){
            let seen = new Set();
            for(let row = boxrow; row < boxrow + 3; row++){
                for(let col = boxcol; col < boxcol + 3; col++){
                    let cell = board[row][col];
                    if(cell === "."){
                        continue;
                    }
                    if(seen.has(cell)){
                        return false;
                    }
                    seen.add(cell);
                }
            }
        }
    }
    return true;
}
console.log(isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]));*/

/*function twoSum(nums, target){
    let seen = {};
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let complement = target - num;
        if(seen[complement] !== undefined){
            return [seen[complement],i];
        }
        seen[num] = i;
    }
        return [];
}
console.log(twoSum([2, 7, 11, 15], 9));*/

/*function longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;
    for(let num of set){
        if(!set.has(num - 1)){
            let current = num;
            let count = 1;
            while(set.has(current + 1)){
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
console.log(longestConsecutive([1,2,3,5,6,7,8,9]));*/

/*function longestsubstring(str){
    let left = 0;
    let seen = new Set();
    let longest = 0;
    for(let right = 0; right < str.length; right++){
        let char = str[right];
        while(seen.has(char)){
            seen.delete(str[left]);
            left++;
        }
        seen.add(char);
        let wordLength = right - left + 1;
        longest = Math.max(longest, wordLength);
    }
    return longest;
} 
console.log(longestsubstring("abcklmnopkw"));*/

/*function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right){
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let area = width * currentHeight;
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));*/

/*function threeSum(nums) {
    nums.sort((a,b)=>a-b);
    let result = [];
    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum < 0){
                left++;
            } else if(sum > 0){
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left - 1]){
                    left++;
                };
                while(left < right && nums[right] === nums[right + 1]){
                    right--;
                }
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));*/

/*function minWindow(s, t) {
    if (t.length > s.length) return "";

    // Count the characters we need
    let need = {};

    for (let ch of t) {
        need[ch] = (need[ch] || 0) + 1;
    }

    let have = 0;
    let needCount = Object.keys(need).length;

    let window = {};

    let left = 0;
    let result = [-1, -1];
    let minLength = Infinity;

    for (let right = 0; right < s.length; right++) {

        let ch = s[right];

        window[ch] = (window[ch] || 0) + 1;

        if (need[ch] !== undefined && window[ch] === need[ch]) {
            have++;
        }

        while (have === needCount) {

            if ((right - left + 1) < minLength) {
                result = [left, right];
                minLength = right - left + 1;
            }

            window[s[left]]--;

            if (
                need[s[left]] !== undefined &&
                window[s[left]] < need[s[left]]
            ) {
                have--;
            }

            left++;
        }
    }

    let [start, end] = result;

    if (minLength === Infinity) {
        return "";
    }

    return s.slice(start, end + 1);
}
console.log(minWindow("ADOBECODEBANC", "ABC"));*/

/*function containsDuplicate(nums) {
    let seen = new Set();
    for(let num of nums){
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false
}
console.log(containsDuplicate([1,2,3,1]));*/

/*function isAnagram(s, t){
    if(s.length !== t.length){
        return false;
    }
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of t){
        if(count[ch]){
            count[ch]--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram"));*/

/*function twoSum(nums, target){
    let seen = {};
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let complement = target - num;
        if(seen[complement] !== undefined){
            return [seen[complement], i];
        }
        seen[num] = i;
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9));*/

/*function mergeArrays(s, t){
    let i = 0;
    let j = 0;
    let n = [];
    while(i < s.length && j < t.length){
        if(s[i] < t[j]){
            n.push(s[i]);
            i++;
        } else {
            n.push(t[j]);
            j++;
        }
    }
    while(i < s.length){
        n.push(s[i]);
        i++;
    }
    while(j < t.length){
        n.push(t[j]);
        j++;
    }
    return n;
}
console.log(mergeArrays([1,3,5], [2,4,6]));*/

/*function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(target === nums[mid]){
            return mid;
        } else if (target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([-1,0,3,5,9,12], 9));*/

/*function searchInsert(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(target === nums[mid]){
            return mid;
        } else if (target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
console.log(searchInsert([1,3,5,6], 2));*/

/*function validbrackets(s){
    const pairs = {"{":"}", "[":"]", "(":")"};
    let stack = [];
    for(let ch of s){
        if(ch === "{" || ch === "[" || ch === "("){
            stack.push(ch);
        } else {
            let last = stack.pop();
            if(ch !== pairs[last]){
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validbrackets("()[]{}"));*/

/*function removeDuplicates(nums){
    if(nums.length === 0){
        return 0;
    }
    let write = 1;
    for(let read = 1; read < nums.length; read++){
        if(nums[read] !== nums[read - 1]){
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}
console.log(removeDuplicates([1,1,2]));*/

/*function moveZeroes(nums) {
    let write = 0;
    for(let read = 0; read < nums.length; read++){
        if(nums[read] !== 0){
            [nums[write], nums[read]] = [nums[read], nums[write]];
            write++;
        }
    }   
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]));*/

/*function maxProfit(prices) {
    let min = prices[0];
    let max = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        } else {
            let profit = prices[i] - min;
            max = Math.max(profit, max);
        }
    }
    return max;
}
console.log(maxProfit([7,1,5,3,6,4]));*/

/*function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));*/

/*function longestConsecutive(nums){
    let answer = 0;
    let count = 0;
    let seen = new Set(nums);
    for(let num of seen){
        if(!seen.has(num - 1)){
            count = 1;
            current = num;
            while(seen.has(current + 1)){
                current++;
                count++;
            }
            answer = Math.max(count, answer);
        }
    }
    return answer;
}
console.log(longestConsecutive([100,4,200,1,3,2]));*/

/*function productExceptSelf(nums){
    let answer = [];
    let prefix = [];
    let suffix = [];
    prefix[0] = 1;
    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    suffix[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    for(let i = 0; i < nums.length; i++){
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
}
console.log(productExceptSelf([1,2,3,4]));*/

/*function groupAnagrams(strs){
    let groups = {};
    for(let word of strs){
        let key = word.split("").sort().join("");
        if(!groups[key]){
            groups[key] = [];
        }
        groups[key].push(word);
    }
    return Object.values(groups);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));*/

/*function topFreqElements(nums, k){
    let result = [];
    let count = {};
    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
    }
    let entries = Object.entries(count);
    entries.sort((a,b) => b[1] - a[1]);
    for(let i = 0; i < k; i++){
        result.push(Number(entries[i][0]));
    }
    return result;
}
console.log(topFreqElements([1,1,1,2,2,3], 2))*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(nums){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = nums[start];
        for(let i = start; i < nums.length; i++){
            if(nums[i] < x){
                break;
            }
            nums[i] -= x;
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function nextShuttle(schedule, currentTime){
    let left = 0;
    let right = schedule.length - 1;
    let answer = -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(currentTime <= schedule[mid]){
            answer = schedule[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}
function finishTime(alpha2beta, beta2alpha, missions){
    let departure1;
    let departure2;
    let currentTime = 0;
    while(missions > 0){
    departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;
    }
    return currentTime;
}
console.log(finishTime([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries) {

    let colors = new Map();
    let result = [];
    let samePairs = 0;

    for (let [coord, color] of queries) {

        let oldColor = colors.get(coord);

        if (oldColor !== undefined) {

            if (
                coord > 0 &&
                colors.get(coord - 1) === oldColor
            ) {
                samePairs--;
            }

            if (
                coord < length - 1 &&
                colors.get(coord + 1) === oldColor
            ) {
                samePairs--;
            }
        }

        colors.set(coord, color);

        if (
            coord > 0 &&
            colors.get(coord - 1) === color
        ) {
            samePairs++;
        }

        if (
            coord < length - 1 &&
            colors.get(coord + 1) === color
        ) {
            samePairs++;
        }

        result.push(samePairs);
    }

    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function frame(n){
    let result = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            result.push("*".repeat(n));
        } else {
            result.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return result;
}
console.log(frame(5));*/

/*function solution(s, t){
    let i = s.length - 1;
    let j = t.length - 1;
    let sum = "";
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if((a<b && b>c) || (a>b && b<c)){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1,2,1,3,4]));*/

/*function solution(fragments, accessCode){

    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){

    function toMinutes(time){
        let[h,m] = time.split(":").map(Number);
        return h*60 + m;
    }
    let current = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    let lastDeparture = -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return current - lastDeparture;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(paragraphs, aligns, width) {
    let result = [];

    // Top border
    result.push("*".repeat(width + 2));

    for (let p = 0; p < paragraphs.length; p++) {

        let words = paragraphs[p];
        let align = aligns[p];

        let line = "";

        for (let i = 0; i < words.length; i++) {

            let word = words[i];

            if (line.length === 0) {
                line = word;
            }
            else if (line.length + 1 + word.length <= width) {
                line += " " + word;
            }
            else {

                // Output current line
                if (align === "LEFT") {
                    line = line.padEnd(width, " ");
                } else {
                    line = line.padStart(width, " ");
                }

                result.push("*" + line + "*");

                line = word;
            }
        }

        // Last line of paragraph
        if (line.length > 0) {

            if (align === "LEFT") {
                line = line.padEnd(width, " ");
            } else {
                line = line.padStart(width, " ");
            }

            result.push("*" + line + "*");
        }
    }

    // Bottom border
    result.push("*".repeat(width + 2));

    return result;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] > frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(current, highest);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
   let result = [];
   for(let i = 0; i < numbers.length - 2; i++){
    let a = numbers[i];
    let b = numbers[i+1];
    let c = numbers[i+2];
    if(a < b && b > c || a > b && b < c){
        result.push(1);
    } else {
        result.push(0);
    }
   }
   return result;
}
console.log(solution([1,2,1,3,4]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                } 
            }
        } else {
                    let index = Number(op.slice(1));
                    state[index] = 0;
                }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    let currentTime = 0;
    function nextShuttle(schedule, currentTime){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] < currentTime){
                left = mid + 1;
            } else {
                departure = schedule[mid];
                right = mid - 1;
            }
        }
        return departure;
    }

    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if((i === 0) || (i === n - 1)){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(5));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = String(Number(s[i])) + sum;
        i--;
    }
    while(j >= 0){
        sum = String(Number(t[j])) + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        s = String(num);
        let zerocount = 0;
        for(let i = 0; i < s.length; i++){
            if(s[i] === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if((a < b && b > c) || (a > b && b < c)){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1,2,1,3,4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;

}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h*60 + m;
    }
    let minutes = 0;
    let departure = -1;
    let current = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departureTime = toMinutes(departure_times[mid]);
        if(departureTime < current){
            departure = departureTime;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        minutes = current - departure;
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; i < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += (num % 10);
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));;*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let num of diffs){
        current += num;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
} 
console.log(solution([1,2,1,3,4]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += (num % 10);
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[answer] < frequency[digit]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let minutes = 0;
    let current = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let target = String(accessCode);
    let count = 0;
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(target === combined){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let i = s.length - 1;
    let j = t.length - 1;
    let sum = "";
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = String(Number(s[i])) + sum;
        i--;
    }
    while(j >= 0){
        sum = String(Number(t[j])) + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if((i === 0) || (i === n - 1)){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n - 2) + "*")
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] < current){
                left = mid + 1;
            } else {
                departure = schedule[mid];
                right = mid - 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
    let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] < x){
                break;
            } else {
                numbers[i] -= x;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1,2,1,3,4]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += (num % 10);
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(current){
        let [h,m] = current.split(":").map(Number);
        return h * 60 + m;
    }
    let minutes = 0;
    let departure = -1;
    let time = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < time){
            minutes = time - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(target === combined){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = String(Number(s[i])) + sum;
        i--;
    }
    while(j >= 0){
        sum = String(Number(t[j])) + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || (i === n - 1)){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n - 2) + "*")
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(alpha2beta, beta2alpha, missions){
    let currentTime = 0;
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] < current){
                left = mid + 1;
            } else {
                departure = schedule[mid];
                right = mid - 1;
            }
        }
        return departure;
    }
    while(missions > 0)
    {let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;}
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(length, queries){
    let colors = new Map();
    let result = [];
    let samePairs = 0;
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(s) {
    let left = 0;
    let seen = new Set();
    let longest = 0;
    let substring;
    for(let right = 0; right < s.length; right++){
        let char = s[right];
        while(seen.has(char)){
            seen.delete(s[left]);
            left++;
        }
        seen.add(char);
        substring = right - left + 1;
        longest = Math.max(longest, substring);
    }
    return longest
}
console.log(solution("abcabdecbb"));*/

/*function solution(numbers){
    let prefix = [];
    let suffix = [];
    prefix[0] = 1;
    for(let i = 1; i < numbers.length; i++){
        prefix[i] = prefix[i - 1] * numbers[i - 1];
    }
    suffix[numbers.length - 1] = 1;
    for(let i = numbers.length - 2; i >= 0; i--){
        suffix[i] = suffix[i + 1] * numbers[i + 1];
    }
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = prefix[i] * suffix[i];
    }
    return numbers;
}
console.log(solution([1, 2, 3, 4]));*/

/*function solution(numbers){
    let seen = new Set();
    for(let num of numbers){
        if(seen.has(num)){
            return num;
        }
        seen.add(num);
    }
    return -1;
}
console.log(solution([2, 1, 3, 5, 3, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== 0){
            start = i;
            break;
        }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let left = 0;
        let right = schedule.length - 1;
        let departure = -1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0)
    {
    let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if((i === 0) || (i === n - 1)){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n - 2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let i = s.length - 1;
    let j = t.length - 1;
    let sum = "";
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = String(Number(s[i])) + sum;
        i--;
    }
    while(j >= 0){
        sum = String(Number(t[j])) + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let target = String(accessCode);
    let count = 0;
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    let departure = -1;
    let current = toMinutes(current_time);
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit < readings.length; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23,]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++)
        {if(frequency[digit] >= frequency[answer]){
        answer = digit;
    }}
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let minutes = 0;
    let current = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let target = String(accessCode);
    let count = 0;
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || (i === n - 1)){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        while(oldColor !== undefined){
        if(coord > 0 && colors.get(coord - 1) === oldColor){
            samePairs--;
        }
        if(coord < length - 1 && colors.get(coord + 1) === oldColor){
            samePairs--;
        }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        } 
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    let currentTime = 0;
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== 0){
            start = i;
            break;
        }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(s){
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of s){
        if(count[ch] === 1){
            return ch;
        }
    }
    return "_";
}
console.log(solution("abacabad"));*/

/*function solution(crypt, solution){
    let map = {};
    for(let [letter, digit] of solution){
        map[letter] = digit;
    }
    let numbers = [];
    for(let word of crypt){
        let num = "";
        for(let ch of word){
            num += map[ch];
        }
        if(num.length > 1 && num[0] === "0"){
            return false;
        }
        numbers.push(Number(num));
    }
    return numbers[0] + numbers[1] === numbers[2];
}
console.log(solution(["SEND", "MORE", "MONEY"], [
    ['O','0'],
    ['M','1'],
    ['Y','2'],
    ['E','5'],
    ['N','6'],
    ['D','7'],
    ['R','8'],
    ['S','9']
]));*/

/*function solution(numbers){
    let seen = new Set();
    for(let num of numbers){
        if(seen.has(num)){
            return true;
        } else {
            seen.add(num);
        }
    }
    return false;
}
console.log(solution([1,2,3,1]));*/

/*function solution(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = s.length - 1;
    while(left <= right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(solution("A man, a plan, a canal: Panama"));*/

/*function solution(numbers){
    if(numbers.length === 0){
        return 0;
    }
    let current = 1;
    let longest = 1;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > numbers[i - 1]){
            current++;
        } else {
            current = 1;
        }
    longest = Math.max(longest, current);
    }
    return longest;
}
console.log(solution([1,2,3,2,3,4,5,1]));*/

/*function solution(words){
    let groups = {};
    for(let word of words){
        let key = word.split("").sort().join("");
        if(!groups[key]){
            groups[key] = [];
        } 
        groups[key].push(word);
    }
    return Object.values(groups);
}
console.log(solution(["eat","tea","tan","ate","nat","bat"]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    } 
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times ,current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution( [1, 2, 1, 3, 4]));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*")
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        while(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;}
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] !== 0){
            let temp = numbers[read];
            numbers[read] = numbers[write];
            numbers[write] = temp;
            write++;
        }
    }    
    return numbers;
}
console.log(solution([0,1,0,3,12]));*/

/*function solution(numbers){
    let largest = -Infinity;
    let second = -Infinity;
    for(let num of numbers){
        if(num > largest){
            second = largest;
            largest = num;
        } else if(num < largest && num > second){
            second = num;
        }
    }
    return second === -Infinity ? -1 : second;
}
console.log(solution([5,1,7,3]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < operations.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution( [1, 2, 1, 3, 4]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10); 
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit < 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = 0; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let minutes = 0;
    let current = toMinutes(current_time);
    let departure = -1;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(n){
    let result = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            result.push("*".repeat(n));
        } else {
            result.push("*" + " ".repeat(n-2) + "*")
        }
    }
    return result;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution( [1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let target = String(accessCode);
    let count = 0;
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let answer = 0;
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let minutes = 0;
    let current = toMinutes(current_time);
    let departure = -1;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let string = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while (i >= 0 && j >= 0){
        string = String(Number(s[i]) + Number(t[j])) + string;
        i--;
        j--;
    }
    while(i >= 0){
        string = s[i] + string;
        i--;
    }
    while(j >= 0){
        string = t[j] + string;
        j--;
    }
    return string;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let result = [];
    let colors = new Map();
    let samePairs = 0;
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let removed = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] <= numbers[i-1]){
            removed++;
            if(removed > 1){
                return false;
            }
            if(i > 1 && numbers[i] <= numbers[i-2]){
                numbers[i] = numbers[i-1];
            }
        }
    }
    return true;
}
console.log(solution([1,3,2,4]));*/

/*function solution(numbers, target){
    let seen = new Set();
    let usedPairs = new Set();
    let answer = [];
    for(let num of numbers){
        if(!seen.has(target - num)){
            seen.add(num);
        } else {
            let a = Math.min(num, target - num);
            let b = Math.max(num, target - num);
            let key = a + "," + b;
            if(!usedPairs.has(key)){
                usedPairs.add(key);
                answer.push([a, b]);
            }
        }
    }
    return answer;
}
console.log(solution([2,7,11,15,1,8], 9));*/

/*function solution(intervals){
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    for(let interval of intervals){
        if(result.length === 0){
            result.push(interval);
        } else {
            let last = result[result.length - 1];
            if(interval[0] <= last[1]){
                last[1] = Math.max(last[1], interval[1]);
            } else {
                result.push(interval);
            }
        }
    }
    return result;
}
console.log(solution([[1,3], [2,6], [8,10], [15,18]]));*/

/*function solution(numbers){
    let result = [];
    let prefix = [];
    let suffix = []; 
    prefix[0] = 1;
    suffix[numbers.length - 1] = 1;
    for(let i = 1; i < numbers.length; i++){
        prefix[i] = prefix[i-1] * numbers[i-1];
    }
    for(let i = numbers.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * numbers[i+1];
    }
    for(let i = 0; i < numbers.length; i++){
        result[i] = prefix[i] * suffix[i];
    }
    return result;
}
console.log(solution([1,2,3,4]));*/

/*function solution(numbers){
    numbers.sort((a, b) => a - b);
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] - 1 > 0 && !numbers.includes(numbers[i] - 1)){
            return numbers[i] - 1;
        } else if(numbers[i] + 1 > 0 && !numbers.includes(numbers[i] + 1)){
            return numbers[i] + 1;
        }
    }
}
console.log(solution([3,4,-1,1]));*/

/*function solution(numbers){
    numbers.sort((a, b) => a - b);
    let expected = 1;
    for(let num of numbers){
        if(num < expected){
            continue;
        }
        if(num === expected){
            expected++;
        }
        if(num > expected){
            break;
        }
    }
    return expected;
}
console.log(solution([3,4,-1,1]));*/

/*function solution(numbers){
    numbers.sort((a, b) => a - b);
    let longest = 0;
    for(let num of numbers){
        if(!numbers.includes(num - 1)){
            let current = num;
            let count = 1;
            while(numbers.includes(num +1)){
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
console.log(solution([100,4,200,1,3,2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let result = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        result += x;
    }
    return result;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let string = "";
    i = s.length - 1;
    j = t.length - 1;
    while(i >= 0 && j >= 0){
        string = String(Number(s[i]) + Number(t[j])) + string;
        i--;
        j--;
    }
    while(i >= 0){
        string = s[i] + string;
        i--;
    }
    while(j >= 0){
        string = t[j] + string;
        j--;
    }
    return string;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length -2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let minutes = 0;
    let departure = -1;
    let current = toMinutes(current_time);
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
    }
    highest = Math.max(highest, current);
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }

    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
    let start = -1;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== 0){
            start = i;
            break;
        }}
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    let currentTime = 0;
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let samePairs = 0;
    let result = [];
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h,m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10); 
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let missions = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            missions = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return missions;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let samePairs = 0;
    let result = [];
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;}
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break; 
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        if(departure === -1){
            return -1;
        }
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let digit = 0; digit <= 9; digit++){
        if(frequency[digit] >= frequency[answer]){
            answer = digit;
        }
    } 
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
    let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs); 
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let missions = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            missions = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return missions;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer])
            answer = i;
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        } 
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m; 
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer
}*/

/*function solution(readings){
    let answer = 0;
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = Number(op.slice(1));
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(target === combined){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let missions = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            missions = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === -1){
        return -1;
    }
    return missions;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[answer] < frequency[i]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(matrix){
    let n = matrix.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let row of matrix){
        row.reverse();
    }
    return matrix;
}
console.log(solution([[1,2,3], [4,5,6], [7,8,9]]));*/

/*function solution(numbers){
    let answer = 0;
    let seen = new Set(numbers);
    for(let num of seen){
        if(!seen.has(num - 1)){
            let current = num;
            let count = 1;
            while(seen.has(current + 1)){
                current++;
                count++;
            }
            answer = Math.max(answer, count);
        }
    }
    return answer;
}
console.log(solution([100,4,200,1,3,2]));*/

/*function solution(matrix){
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while(top <= bottom && left <= right){
        for(let i = left; i <= right; i++){
            result.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;
        if(left <= right){
            for(let i = right; i >= left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(top <= bottom){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}
console.log(solution([[1,2,3], [4,5,6], [7,8,9]]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        count = Math.max(count, zerocount);
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let departure = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            minutes = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(departure === - 1){
        return - 1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let count = {};
    for(let num of numbers){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of numbers){
        if(count[num] === 1){
            return num;
        } 
    }
    return -1;
}
console.log(solution([4, 5, 1, 2, 1, 4, 5]));*/

/*function solution(numbers){
    let answer = -Infinity;
    for(let i = 0; i < numbers.length - 1; i++){
        let sum = numbers[i] + numbers[i+1];
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solution([2, 5, 1, 8, 3]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] !== 0){
            let temp = numbers[read];
            numbers[read] = numbers[write];
            numbers[write] = temp;
            write++;
        }
    }
    return numbers;
}
console.log(solution([0, 1, 0, 3, 12]));*/

/*function solution(numbers){
    let answer = 0;
    let element;
    let count = {};
    for(let num of numbers){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of numbers){
        if(count[num] > answer){
            element = num;
            answer = count[num];
        } else if (count[num] === answer){
            element = Math.max(element, num);
        }
    }
    return element;
}
console.log(solution([4, 2, 4, 3, 2, 4]));*/

/*function solution(numbers){
    let answer = 0;
    let sub = [];
    let i = 0;
    let j = 1;
    while(j < numbers.length){
        if(numbers[j] === numbers[i] + 1 && !sub.includes(i)){
            sub.push(i,j);
            i++;
            j++;
            answer = Math.max(answer, sub.length);
        } else if(numbers[j] === numbers[i] + 1){
            sub.push(j);
            i++;
            j++;
            answer = Math.max(answer, sub.length);
        } else if(numbers[j] !== numbers[i] + 1){
            sub = [];
            i++;
            j++;
        }
    }
    return answer;
}
console.log(solution([1, 2, 3, 1, 2]));*/

/*function solution(numbers){
    let answer = 0;
    let seen = new Set();
    let left = 0;
    for(let right = 0; right < numbers.length; right++){
        while(seen.has(numbers[right])){
            seen.delete(numbers[left]);
            left++;
        }
        seen.add(numbers[right]);
        answer = Math.max(answer, seen.size);
    }
    return answer;
}
console.log(solution([1, 2, 3, 1, 2]));*/

/*function solution(s){
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of s){
        if(count[ch] === 1){
            return ch;
        }
    }
    return "_";
}
console.log(solution("abacabad"));*/

/*function solution(s, t){
    if(s.length !== t.length){
        return false;
    }
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of t){
        if(!count[ch]){
            return false;
        }
        count[ch]--;
    }
    return true;
}
console.log(solution("listen", "silent"));*/

/*function solution(numbers, target){
    let seen = new Set();
    for(let num of numbers){
        if(seen.has(target - num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(solution([2, 7, 11, 15], 9));*/

/*function solution(numbers){
    numbers = numbers.sort((a, b) => a - b);
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== i){
            return i;
        }
    }
}
console.log(solution([3, 0, 1]));*/

/*function solution(numbers){
    let n = numbers.length;
    let expected = n * (n + 1) / 2;
    let actual = 0;
    for(let num of numbers){
        actual += num;
    }
    return expected - actual;
}
console.log(solution([3, 0, 1]));*/

/*function solution(numbers){
    let answer = numbers[0] + numbers[1];
    for(let i = 0; i < numbers.length - 1; i++){
        let sum = numbers[i] + numbers[i+1];
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solution([2, 7, 3, 9, 1]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] !== 0){
            let temp = numbers[read];
            numbers[read] = numbers[write];
            numbers[write] = temp;
            write++;
        }
    }
    return numbers;
}
console.log(solution([0, 1, 0, 3, 12]));*/

/*function solution(numbers){
    let largest = -Infinity;
    let second = -Infinity;
    for(let num of numbers){
        if(num > largest){
            second = largest;
            largest = num;
        } else if(num < largest && num > second){
            second = num;
        }
    }
    if(second === -Infinity){
        return -1;
    }
    return second;
}
console.log(solution([7, 7, 5, 3]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let lastdeparture = -1;
    let current = toMinutes(current_time);
    let missions = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastdeparture = departure;
            missions = current - departure;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastdeparture === -1){
        return -1;
    }
    return missions;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let count = {};
    for(let num of numbers){
        count[num] = (count[num] || 0) + 1;
    }
    let answer = numbers[0];
    let highfreq = count[answer];
    for(let num of numbers){
        if(count[num] > highfreq){
            answer = num;
            highfreq = count[answer];
        } else if(count[num] === highfreq){
            if(answer < num){
                answer = num;
            }
        }
    }
    return answer;
}
console.log(solution([5, 5, 5, 2, 2, 2]));*/

/*function solution(numbers){
    let seen = new Set();
    for(let num of numbers){
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(solution([5, 5]));*/

/*function solution(s){
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of s){
        if(count[ch] === 1){
            return ch;
        }
    }
    return "_";
}
console.log(solution("aabb"));*/

/*function solution(s, t){
    if(s.length !== t.length){
        return false;
    }
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of t){
        if(!count[ch]){
            return false;
        }
        count[ch]--;
    }
    return true;
}
console.log(solution("anagram", "nagaram"));*/

/*function solution(numbers, target){
    let seen = new Set();
    for(let num of numbers){
        if(seen.has(target - num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(solution([2, 7, 11, 15], 9));*/

/*function solution(numbers){
    let n = numbers.length;
    let expected = n * (n + 1) / 2;
    let actual = 0;
    for(let num of numbers){
        actual += num;
    }
    return expected - actual;
}
console.log(solution([9,6,4,2,3,5,7,0,1]));*/

/*function solution(numbers){
    let prefix = [];
    let suffix = [];
    let result = [];
    prefix[0] = 1;
    suffix[numbers.length - 1] = 1;
    for(let i = 1; i < numbers.length; i++){
        prefix[i] = prefix[i-1] * numbers[i-1];
    }
    for(let i = numbers.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * numbers[i+1];
    }
    for(let i = 0; i < numbers.length; i++){
        result[i] = prefix[i] * suffix[i];
    }
    return result;
}
console.log(solution([1, 2, 3, 4]));*/

/*function solution(numbers){
    let seen = new Set();
    let longest = 0;
    let left = 0;
    for(let right = 0; right < numbers.length; right++){
        while(seen.has(numbers[right])){
            seen.delete(numbers[left]);
            left++;
        }
        seen.add(numbers[right]);
        longest = Math.max(longest, seen.size);
    }
    return longest;
}
console.log(solution([1, 2, 3, 1, 2]));*/

/*function solution(numbers){
    let longest = 0;
    let count = 0;
    numbers = new Set(numbers);
    for(let num of numbers){
        if(!numbers.has(num - 1)){
            let current = num;
            count = 1;
            while(numbers.has(current + 1)){
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
console.log(solution([100, 4, 200, 1, 3, 2]));*/

/*function solution(numbers){
    let largest = -Infinity;
    for(let i = 0; i < numbers.length; i++){
        let sum = 0;
        for(let j = i; j < numbers.length; j++){
            sum += numbers[j];
            largest = Math.max(largest, sum);
        }
    }
    return largest;
}
console.log(solution([5, 4, -1, 7, 8]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions --;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let lastDeparture = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            minutes = current - lastDeparture; 
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = - Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    let nums = [];
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return 60 * h + m;
    }
    let lastDeparture = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            minutes = current - lastDeparture;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [highest, current];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let sum = 0;
        for(let j = i; j < numbers.length; j++){
            sum += numbers[j];
            largest = Math.max(largest, sum);
        }
    }
    return largest;
}
console.log(solution([5, 4, -1, 7, 8]));*/

/*function solution(numbers){
    let current = numbers[0];
    let largest = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        current = Math.max(numbers[i], current + numbers[i]);
        largest = Math.max(largest, current);
    }
    return largest;
}
console.log(solution([5, 4, -1, 7, 8]));*/

/*function solution(numbers, target){
    let left = 0;
    let right = numbers.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(numbers[mid] === target){
            return mid;
        } else if(numbers[mid] < target){
            left = mid + 1;
        } else if(numbers[mid] > target){
            right = mid - 1;
        }
    }
    return -1;
}
console.log(solution([1, 3, 5, 7, 9, 11], 7));*/

/*function  solution(s) {
    let answer = "";
    for(let ch of s){
        answer += ch;
    }
    return answer;
}
console.log(solution("WLLDL"));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] !== 0){
            let temp = numbers[read];
            numbers[read] = numbers[write];
            numbers[write] = temp;
            write++;
        }
    }
    return numbers;
}
console.log(solution([0, 1, 0, 3, 12]));*/

/*function solution(numbers){
    let largest = -Infinity;
    let second = -Infinity;
    for(let num of numbers){
        if(num > largest){
            second = largest;
            largest = num;
        } else if(num < largest && num > second){
            second = num;
        }
    }
    return second === -Infinity ? -1 : second;
}
console.log(solution([-1, -5, -3]));*/

/*function solution(numbers){
    let largest = -Infinity;
    for(let i = 0; i < numbers.length - 1; i++){
        let sum = numbers[i] + numbers[i + 1];
        largest = Math.max(largest, sum);
    }
    return largest;
}
console.log(solution([-5, -2, -8]));*/

/*function solution(numbers, k){
    if(numbers.length === 0){
        return [];
    }
    k = k % numbers.length;
    let j = numbers.length;
    let last = numbers.slice(j - k);
    let first = numbers.slice(0, j - k);

    return [...last, ...first];
}
console.log(solution([1, 2, 3, 4, 5], 2));*/

/*function solution(a, b){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < a.length && j < b.length){
        if(a[i] <= b[j]){
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        } 
    }
    while(i < a.length){
        result.push(a[i]);
        i++;
    }
    while(j < b.length){
        result.push(b[j]);
        j++;
    }
    return result;
}
console.log(solution([1, 3, 5], [2, 4, 6]));*/

/*function solution(s){
    let stack = [];
    const pairs = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };
    for(let ch of s){
        if(ch === "(" || ch === "{" || ch === "["){
            stack.push(ch);
        } else {
            let last = stack.pop();
            if(pairs[last] !== ch){
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(solution("{[]}"));*/

/*function solution(s){
    let open = 0;
    let needed = 0;

    for(let ch of s){
        if(ch === "("){
            open++;
        } else if(open > 0){
            open--;
        } else {
            needed++;
        }
    }
    return open + needed;
}
console.log(solution("()))(("));*/

/*function solution(s){
    let result = [];
    s = s.split(" ");
    let i = s.length - 1;
    while(i >= 0){
        result.push(s[i]);
        i--;
    }
    return result.join(" ");
}
console.log(solution("one two three"));*/

/*function solution(s){
    return s.split(" ").reverse().join(" ");
}
console.log(solution("one two three"));*/

/*function solution(numbers){
    let count = {};
    for(let num of numbers){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of numbers){
        if(count[num] === 1){
            return num;
        }
    }
    return -1
}
console.log(solution([4, 5, 1, 2, 1, 4, 5]));*/

/*function solution(numbers){
    let seen = [];
    for(let num of numbers){
        if(!seen.includes(num)){
            seen.push(num);
        }
    }
    return seen;
}
console.log(solution([1, 1, 2, 2, 3, 4, 4]));*/

/*function solution(numbers){
    return [...new Set(numbers)];
}
console.log(solution([1, 1, 2, 2, 3, 4, 4]));*/

/*function solution(numbers){
    let seen = new Set();
    for(let num of numbers){
        if(!seen.has(num)){
            seen.add(num);
        } else {
            return true;
        }
    }
    return false;
}
console.log(solution([1, 2, 3, 1]));*/

/*function solution(a, b){
    let result = [];
    for(let num of a){
        if(b.includes(num) && !result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(solution([1, 2, 2, 3, 4], [2, 2, 4, 5]));*/

/*function solution(a, b){
    let seen = new Set(b);
    let result = new Set();
    for(let num of a){
        if(seen.has(num)){
            result.add(num);
        }
    }
    return [...result];
}
console.log(solution([1, 2, 2, 3, 4], [2, 2, 4, 5]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] < 0){
            let temp = numbers[write];
            numbers[write] = numbers[read];
            numbers[read] = temp;

            write++;
        }
    }
    return numbers;
}
console.log(solution([1, -2, 3, -4, 5, -6]));*/

/*function solution(s){
    let answer = "";
    let longest = 0;
    s = s.split(" ");
    for(let word of s){
        if(word.length > longest){
            longest = word.length;
            answer = word;
        }
    }
    return answer;
}
console.log(solution("I love JavaScript code"));*/

/*function solution(numbers){
    let seen = new Set(numbers);
    let longest = 0;
    for(let num of numbers){
        if(!seen.has(num - 1)){
            let current = num;
            let count = 1;
            while(seen.has(current + 1)){
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
console.log(solution([100, 4, 200, 1, 3, 2]));*/

/*function solution(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let product = numbers[i] * numbers[j];
            largest = Math.max(largest, product);
        }
    }
    return largest;
}
console.log(solution([3, 5, 2, 9]));*/

/*function solution(numbers){
    let answer = numbers[0];
    let count = {};
    for(let num of numbers){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of numbers){
        if(count[num] > count[answer]){
            answer = num;
        } else if(count[num] === count[answer] && num > answer){
            answer = num;
        }
    }
    return answer;
}
console.log(solution([2, 2, 4, 4, 7]));*/

/*function solution(numbers, target){
    let seen = {};
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        let complement = target - num;
        if(seen[complement] !== undefined){
            return[seen[complement], i];
        }
        seen[num] = i;
    }
    return [-1, -1];
}
console.log(solution([2, 7, 11, 15], 9));*/

/*function solution(prices){
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] > prices[i]){
                profit = Math.max(profit, prices[j] - prices[i]);
            }
        }
    }
    return profit;
}
console.log(solution([7, 6, 4, 3, 1]));*/

/*function solution(prices){
    let cheapest = Infinity;
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < cheapest){
            cheapest = prices[i];
        } else {
            profit = Math.max(profit, (prices[i] - cheapest));
        }
    }
    return profit;
}
console.log(solution([7, 6, 4, 3, 1]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [current, highest];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let lastDeparture = -1;
    let minutes = 0;
    let current = toMinutes(current_time);
    let i = 0;
    let j = departure_times.length - 1;
    while(i <= j){
        let mid = Math.floor((i + j) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(current > departure){
            lastDeparture = departure;
            minutes = current - lastDeparture;
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let target = String(accessCode);
    let count = 0;
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(numbers){
    let answer = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--; 
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*")
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let answer = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        answer.push(samePairs);
    }
    return answer;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let prefix = [];
    let suffix = [];
    let answer = [];
    prefix[0] = 1;
    suffix[numbers.length - 1] = 1;
    for(let i = 1; i < numbers.length; i++){
        prefix[i] = prefix[i- 1] * numbers[i-1]; 
    }
    for(let i = numbers.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * numbers[i+1];
    }
    for(let i = 0; i < numbers.length; i++){
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
}
console.log(solution([1, 2, 3, 4]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 0; read < numbers.length; read++){
        if(numbers[read] !== 0){
            let temp = numbers[read];
            numbers[read] = numbers[write];
            numbers[write] = temp;
            write++;
        }
    }
    return numbers;
}
console.log(solution([0, 1, 0, 3, 12]));*/

/*function solution(numbers){
    let write = 0;
    for(let read = 1; read < numbers.length; read++){
        if(numbers[read] !== numbers[write]){
            write++;
            numbers[write] = numbers[read];
        }
    }
    return numbers.slice(0, write + 1);
}
console.log(solution([1, 1, 1, 2, 2, 2, 3, 4, 4]));*/

/*function solution(numbers){
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        while(numbers[left] < 0){
            left++;
        }
        while(numbers[right] >= 0){
            right--;
        }
        if(left < right){
            let temp = numbers[left];
            numbers[left] = numbers[right];
            numbers[right] = temp;
        }
    }
    return numbers;
}
console.log(solution([3, -1, 4, -2, 5, -7]));*/

/*function solution(s){
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s.join("");
}
console.log(solution("banana"));*/

/*function solution(s){
    if(s.length === 0){
        return false;
    }
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if(s[i] === s[j]){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(solution("racecar"));*/

/*function solution(s, t){
    if(s.length !== t.length){
        return false;
    }
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of t){
        if(count[ch]){
            count[ch]--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(solution("listen", "silent"));*/

/*function solution(numbers, k){
    let indices = {};
    for(let i = 0; i < numbers.length; i++){
        if(indices[numbers[i]] !== undefined){
            if(i - indices[numbers[i]] <= k){
                return true;
            }
        }
        indices[numbers[i]] = i;
    }
    return false;
}
console.log(solution([1, 0, 1, 1], k = 1));*/

/*function solution(numbers, k){
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += numbers[i];
    }
    let largest = sum;
    for(let i = k; i < numbers.length; i++){
        sum = sum - numbers[i - k] + numbers[i];
        largest = Math.max(largest, sum);
    }
    return largest;
}
console.log(solution([2, 1, 5, 1, 3, 2], k = 3));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [current, highest];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let lastDeparture = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            minutes = current - lastDeparture;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
        }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(numbers){
    let answer = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }   
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*")
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let answer = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){if(coord > 0 && colors.get(coord - 1) === oldColor){
            samePairs--;
        }
        if(coord < length - 1 && colors.get(coord + 1) === oldColor){
            samePairs--;
        }}
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        answer.push(samePairs);
    }
    return answer;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){let departure1 = nextShuttle(alpha2beta, currentTime);
    if(departure1 === -1){
        return -1;
    }
    currentTime = departure1 + 100;
    let departure2 = nextShuttle(beta2alpha, currentTime);
    if(departure2 === -1){
        return -1;
    }
    currentTime = departure2 + 100;
    missions--;}
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
        for(let op of operations){
            if(op === "L"){
                for(let i = 0; i < state.length; i++){
                    if(state[i] === 0){
                        state[i] = 1;
                        break;
                    }
                }
            } else {
                let index = op.slice(1);
                state[index] = 0;
            }
        }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let colors = new Map();
    let samePairs = 0;
    let result = [];
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        } 
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let answer = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let current = toMinutes(current_time);
    let lastDeparture = -1;
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            minutes = current - lastDeparture;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [current, highest];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(diffs){
    current = 1500;
    highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [current, highest];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    let lastdeparture = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastdeparture = departure;
            minutes = current - lastdeparture;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastdeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(a){
    let answer = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            answer++;
        }
    }
    return answer;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(length, queries){
    let result = [];
    let samePairs = 0;
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(state, operations){
    for(let op of operations){
        if(op === "L"){
            for(let i = 0; i < state.length; i++){
                if(state[i] === 0){
                    state[i] = 1;
                    break;
                }
            }
        } else {
            let index = op.slice(1);
            state[index] = 0;
        }
    }
    return state.join("");
}
console.log(solution([1,0,0,1,1], ["L","C2","L","C4"]));*/

/*function solution(numbers){
    let sum = 0;
    while(true){
        let start = -1;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] !== 0){
                start = i;
                break;
            }
        }
        if(start === -1){
            break;
        }
        let x = numbers[start];
        for(let i = start; i < numbers.length; i++){
            if(numbers[i] >= x){
                numbers[i] -= x;
            } else {
                break;
            }
        }
        sum += x;
    }
    return sum;
}
console.log(solution([3, 5, 2]));*/

/*function solution(alpha2beta, beta2alpha, missions){
    function nextShuttle(schedule, current){
        let departure = -1;
        let left = 0;
        let right = schedule.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(schedule[mid] >= current){
                departure = schedule[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return departure;
    }
    let currentTime = 0;
    while(missions > 0){
        let departure1 = nextShuttle(alpha2beta, currentTime);
        if(departure1 === -1){
            return -1;
        }
        currentTime = departure1 + 100;
        let departure2 = nextShuttle(beta2alpha, currentTime);
        if(departure2 === -1){
            return -1;
        }
        currentTime = departure2 + 100;
        missions--;
    }
    return currentTime;
}
console.log(solution([0, 50, 120, 300], [150, 260, 400], 2));*/

/*function solution(length, queries){
    let samePairs = 0;
    let result = [];
    let colors = new Map();
    for(let [coord, color] of queries){
        let oldColor = colors.get(coord);
        if(oldColor !== undefined){
            if(coord > 0 && colors.get(coord - 1) === oldColor){
                samePairs--;
            }
            if(coord < length - 1 && colors.get(coord + 1) === oldColor){
                samePairs--;
            }
        }
        colors.set(coord, color);
        if(coord > 0 && colors.get(coord - 1) === color){
            samePairs++;
        }
        if(coord < length - 1 && colors.get(coord + 1) === color){
            samePairs++;
        }
        result.push(samePairs);
    }
    return result;
}
console.log(solution(5, [[1,"red"], [2,"red"], [4,"blue"], [3,"blue"]]));*/

/*function solution(n){
    let frame = [];
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            frame.push("*".repeat(n));
        } else {
            frame.push("*" + " ".repeat(n-2) + "*");
        }
    }
    return frame;
}
console.log(solution(7));*/

/*function solution(s, t){
    let sum = "";
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 && j >= 0){
        sum = String(Number(s[i]) + Number(t[j])) + sum;
        i--;
        j--;
    }
    while(i >= 0){
        sum = s[i] + sum;
        i--;
    }
    while(j >= 0){
        sum = t[j] + sum;
        j--;
    }
    return sum;
}
console.log(solution("123", "45"));*/

/*function solution(a){
    let count = 0;
    for(let num of a){
        let s = String(num);
        let zerocount = 0;
        for(let ch of s){
            if(ch === "0"){
                zerocount++;
            }
        }
        if(zerocount % 2 === 1){
            count++;
        }
    }
    return count;
}
console.log(solution([4,50,100,65,2000,700,1,10]));*/

/*function solution(numbers){
    let result = [];
    for(let i = 0; i < numbers.length - 2; i++){
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        if(a < b && b > c || a > b && b < c){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
console.log(solution([1, 2, 1, 3, 4]));*/

/*function solution(fragments, accessCode){
    let count = 0;
    let target = String(accessCode);
    for(let i = 0; i < fragments.length; i++){
        for(let j = 0; j < fragments.length; j++){
            if(i === j){
                continue;
            }
            let combined = String(fragments[i]) + String(fragments[j]);
            if(combined === target){
                count++;
            }
        }
    }
    return count;
}
console.log(solution([12, 34, 1, 234], "1234"));*/

/*function solution(departure_times, current_time){
    function toMinutes(time){
        let [h, m] = time.split(":").map(Number);
        return 60 * h + m;
    }
    let lastDeparture = -1;
    let current = toMinutes(current_time);
    let minutes = 0;
    let left = 0;
    let right = departure_times.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let departure = toMinutes(departure_times[mid]);
        if(departure < current){
            lastDeparture = departure;
            minutes = current - lastDeparture;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(lastDeparture === -1){
        return -1;
    }
    return minutes;
}
console.log(solution(["08:30", "10:15", "12:00", "14:45"], "13:20"));*/

/*function solution(heights, viewGap){
    let answer = -Infinity;
    for(let i = 0; i < heights.length; i++){
        for(let j = viewGap; j < heights.length; j++){
            answer = Math.min(answer, Math.abs(heights[i] - heights[j]));
        }
    }
    return answer;
}*/

/*function solution(readings){
    let frequency = Array(10).fill(0);
    for(let num of readings){
        while(num >= 10){
            let sum = 0;
            while(num > 0){
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
        frequency[num]++;
    }
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(frequency[i] >= frequency[answer]){
            answer = i;
        }
    }
    return answer;
}
console.log(solution([987, 50, 23]));*/

/*function solution(diffs){
    let current = 1500;
    let highest = 1500;
    for(let diff of diffs){
        current += diff;
        highest = Math.max(highest, current);
    }
    return [current, highest];
}
console.log(solution([-100, 200, -50, 300]));*/

/*function solution(t, s){
    let count = 0;
    for(let i = 0; i < t.length - 4; i++){
        let combined = t[i] + t[i+2] + t[i+4];
        if(combined === s){
            count++;
        }
    }
    return count;
}
console.log(solution("azcabcab", "acb"));*/

/*function solution(words, sentence){
    let num1 = 0;
    let num2 = 0;
    words = new Set(words);
    sentence = sentence.replace(/[!;?,.]/g, "").split(" ");
    sentence = new Set(sentence);
    for(let word of sentence){
        if(!words.has(word)){
            num1++;
        } else {
            num2++;
        }
    }
    return [num1, num2];
}
console.log(solution(["cat", "dog"], "there is a cat, rabbit, and another rabbit."));*/

/*function solution(s){
    let count = {};
    for(let ch of s){
        count[ch] = (count[ch] || 0) + 1;
    }
    for(let ch of s){
        if(count[ch] > 1){
            return ch;
        }
    }
    return -1;
}
console.log(solution("swiss"));*/

