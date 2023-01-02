# Code Challenge 26

## Insertion Sort

## Blog

As per the in class suggestion I will utilize Chat GPT in order to utilize an AI tool for the first time in order learn how to use it.

I gave chat GPT this code block to give me a step by step breakdown of what this code is doing:

  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

I was amazed at how quickly it was able to process the information and form an answer giving me 10 steps.

1. The function takes in an integer array called arr as an input.

This would not have been super obvious to me as I have never seen a format such as int[] arr, but after seeing this explanation it makes sense.  int being short for integer being placed before the abbreviation for array (which i am familiar with). So the AI gave me very good help with the clarification there.

2. The function performs a for loop that iterates from 1 to the length of the array. This loop will run for every element in the array, starting from the second element.

This part was obvious for me as it looks like the written out form of the first step of a for loop in Javascript. However, I would have focuse more on just the length of the array and I, and probably missed that I is = 1 rather than 0.

3. The loop declares an integer j and initializes it to i - 1. This is because we want to compare the current element arr[i] with the elements that come before it in the array.

This then clairifed why we are not starting with 0 and started with 1 it's because of the fact that that the current element is looking back one element to compare itself to what came before.

4. The loop declares an integer temp and initializes it to arr[i]. This is because we will need to temporarily store the value of arr[i] in a separate variable while we are shifting the other elements around.

This also makes sense as in the past I have always had to store the elements of an array in another array to shift them around while interating through the original array that has the elements to be sorted.

5. The loop enters a while loop that will continue to run as long as j is greater than or equal to 0 and temp is less than arr[j]. This means that the loop will keep running as long as we have not reached the start of the array and the current element is less than the element we are comparing it to.

This is new information to me and I probably would have google searched for a bit in order to figure out how to prperly configure the while loop.  But after reading this explanation it made sense to me,

6. Inside the while loop, the code assigns the value of arr[j] to the element at index j + 1. This has the effect of shifting the element at arr[j] one position to the right.

This makes sense as we also did this in the for loop as mentioned above because we are comparing things before our current value.

7. The loop then decrements j by 1. This moves the loop to the next element to the left in the array, which will be compared to temp in the next iteration.

Since we previously have moved from left to right we now have to go from right to left. So that way we can begin the process of actually sorting now that every value has been observed.

8. Once the while loop ends, the code assigns the value of temp to the element at index j + 1. This inserts the original value of arr[i] into its correct position in the array.

This is where the sorting is acutally happening.

9. The for loop then moves on to the next iteration, repeating the process for the next element in the array.

10. Once the for loop has completed all its iterations, the function returns the sorted array.

and there you have it.  Chat GPT was able to help me siginifcantly cut down the research time in order to complete a task and it was able to correct me on the proper way of doing things where i either would have been wrong in previous assumptions as well as prevent me from going astray in research further contributing to wasted time.

