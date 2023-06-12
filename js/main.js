/**
 Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.



**/

//this was my solution to the problem

function disemvowel(str) { 
    let sentenceWithoutVowels = str.split("a").join("").split("e").join("").split("i").join("").split("o").join("").split("u").join("").split("A").join("").split("E").join("").split("I").join("").split("O").join("").split("U").join("")
    console.log(sentenceWithoutVowels)
    return(sentenceWithoutVowels)

  }

  disemvowel("hEre we go, gOtta burn it up")


  //this was the solution with 1148 similar variations....
  function disemvowels(str) {
    return str.replace(/[aeiou]/gi, ''); 
    //the brackets and dashes let the program know that there are going to be multipled letters to remove

    //the g in gi means global, meaning it will replace repeated vowels of the same vowel

    //meanwhile the i is letting it know to affect the uppercase vowels as well(found out by testing)
  }

  console.log(disemvowels("WHAT is going ON HEIA"))