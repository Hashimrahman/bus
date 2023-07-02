function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation and redirect to main page
    if (username && password) {
      document.getElementById('loginSignupPage').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    } else {
      alert('Invalid username or password');
    }
  }
  
  function signup() {
    var signupUsername = document.getElementById('signupUsername').value;
    var signupPassword = document.getElementById('signupPassword').value;
  
    // Perform signup validation and redirect to main page
    if (signupUsername && signupPassword) {
      document.getElementById('loginSignupPage').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    } else {
      alert('Invalid signup information');
    }
  }
function searchBus() {
  var start = document.getElementById('start').value;
  var destination = document.getElementById('destination').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  // Perform bus search and display available options
  if (start && destination && date && time) {
    document.getElementById('searchForm').style.display = 'none';
    document.getElementById('bookingForm').style.display = 'block';
  } else {
    alert('Please fill in all the fields');
  }
}

function makePayment() {
  var cardNumber = document.getElementById('cardNumber').value;
  var expiry = document.getElementById('expiry').value;
  var cvv = document.getElementById('cvv').value;

  // Perform payment validation
  if (cardNumber && expiry && cvv) {
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'block';
  } else {
    alert('Please fill in all the payment details');
  }
}

function completeBooking() {
  // Perform booking completion and show success message
  alert('Booking completed successfully!');
}

  
  // Other functionalities and functions can be added here
  