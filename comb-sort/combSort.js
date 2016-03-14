var swap = function(array, i, j) {
  var x = array[i];
  array[i] = array[j];
  array[j] = x;
}

var combSort = function(array) {
  var gap = array.size;
  var shrink = 1.3;

  while((gap !== 1) || (swapped === true)) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) {
      gap = 1;
    };

    var swapped = false;

    for(i = 0; i + gap >= array.size; i++) {
      if (array[i] > array[i + gap]) {
        swap(array, i, i + gap);
        swapped = true;
      };
    };
  };
  return array;
};

// Pseudocode: 

// function combsort(array input)

//     gap := input.size //initialize gap size
//     shrink := 1.3 //set the gap shrink factor

//     loop until gap = 1 and swapped = false
//         //update the gap value for a next comb. Below is an example
//         gap := int(gap / shrink)
//         if gap < 1
//           //minimum gap is 1
//           gap := 1
//         end if
        
//         i := 0
//         swapped := false //see bubblesort for an explanation
        
//         //a single "comb" over the input list
//         loop until i + gap >= input.size //see shellsort for similar idea
//             if input[i] > input[i+gap]
//                 swap(input[i], input[i+gap])
//                 swapped := true // Flag a swap has occurred, so the
//                                 // list is not guaranteed sorted
//             end if
//             i := i + 1
//         end loop
       
//     end loop
// end function