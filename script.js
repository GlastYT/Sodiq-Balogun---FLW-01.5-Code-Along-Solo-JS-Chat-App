let darthSend = document.querySelector(".darth-send-button");
let yodaSend = document.querySelector(".yoda-send-button");
let darthInput = document.querySelector(".darth-input");
let darthMessage = darthInput.value;
let yodaInput = document.querySelector(".yoda-input");
let yodaMessage = yodaInput.value;
let chatWindow = document.querySelector(".chat-window");
let darthImage = `<img src="https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png">`;
let yodaImage = `<img src="https://i.pinimg.com/originals/00/5d/82/005d82a61b8bf5a25e426ab71e8bd360.jpg">`;

// task 1: declare a variable to save the darth send button
// task 2: declare a variable to save the yoda send button
// task 3: declare a variable to save the darth input
// task 4: declare a variable to save the yoda input
// task 5: declare a variable to save the chat window




// task 6: create an onclick event for the darth button
darthSend.onclick = function() {
  console.log("You've clicked on the darth send button");

  // task 7: declare a variable for darth's message that saves the value of the darth input
let darthMessage = `<p>${darthInput.value}</p>`;
  
  // task 8: declare a variable that saves the message you want to append. Using string interpolation, make sure the darth message and darthImage variable are inside a div with the class name "darth-container".
let darthMessages = document.querySelector(".darthMessages");

  // task 9: add(append) the message to the chat window. Use the position beforeend. Don't forget to close off your click event!
 darthMessages.insertAdjacentHTML('beforeend', darthMessage);
}


// task 10: create an onclick event for the yoda button
yodaSend.onclick = function() {
  console.log("You've clicked on the yoda send button");


  // task 11: declare a variable for yoda's message that saves the value of the yoda input.
let yodaMessage = `<p>${yodaInput.value}</p>`;
  
  // task 12: declare a variable that saves the message you want to append. Using string interpolation, make sure the yoda message and yodaImage variable are inside a div with the class name "yoda-container".
let yodaMessages = document.querySelector(".yodaMessages");

  // task 13: add(append) the message to the chat window. Use the position beforeend. Don't forget to close off your click event!
yodaMessages.insertAdjacentHTML('beforeend', yodaMessage);
}