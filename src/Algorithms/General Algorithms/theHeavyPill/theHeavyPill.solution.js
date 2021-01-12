/* 

  We don't need to measure the entire bottle, just one pill. 

  Put a different number of each pill on the scale, and 
  mark the bottle how many were placed in.

  Take the toal weight, which SHOULD equal 1 + 2 + ... + 20 = n(n + 1)/2 = 20(21) / 2 = 210
  Subtract the 210 from the total, which will give you the remainder weight of the 
  heavy pills. Divide the remainder by 0.1, to tell you how many heavy pills were placed on the scale.
  Find the bottle marked with the number.

  The ending total will tell you how many hevay pills were placed on the scale. 

  Say pill bottle 6 was the heavy one.
  The final weight will be 210.6
  210.6 - 210 = 0.6 
  0.6 / 0.1 = 6
  Pill bottle 6

*/
