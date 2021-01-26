let names = ["Chris", "Mark" , "Patrik", "Pista"];

names.forEach (names => {
    $("ul").append(names);

});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('h1').append(additionalBlock.title);
$('p').append(additionalBlock.text);