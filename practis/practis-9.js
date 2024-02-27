{
    let i = 65;
    console.log("Alphabets form (A-65 TO Z-90) are:");
    do{
      document.write('&nbsp'+`${String.fromCharCode(i)} - ${i}`);
      i++;
    }while (i <=90);
}