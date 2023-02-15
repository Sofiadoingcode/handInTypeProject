const helloWorld = (name: string):string => {
    return `Hello from ${name}`;
  };

  console.log(helloWorld("Haj"));
  document.getElementById("root")!.innerHTML = helloWorld("Haj");


  //Self invoked function
  ((name: string) => {
    console.log(`Hello from ${name}`);
  })('Typescript');