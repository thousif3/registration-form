function showWelcomeMessage() {
    const welcomeMessage = "Welcome to the Registration Form\nCreated by Thousif";
    alert(welcomeMessage);
}

// Call the function to display the welcome message
showWelcomeMessage();

function validateForm() {

    
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !dob || !username || !password || !confirmPassword ) {
        alert('All fields must be filled out');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePasswordStrength(password)) {
        alert('Password must be at least 8 characters long and contain a mix of uppercase, lowercase, and numbers');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    alert('Registration successful!');
    
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePasswordStrength(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}


// New function for form reset
function resetForm() {
    document.forms['Formfill'].reset();
    alert('Form reset successfully!');
}

// New function to log form data to console
function logFormData() {
    const formData = {
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };
    console.log("Form Data:", formData);
    alert('Form data logged to console. Check the browser console (F12) for details.');
}

// New function for form submission
function submitForm() {
    validateForm(); 
}


// New commands to add event listeners and call functions when needed
document.getElementById('resetBtn').addEventListener('click', resetForm);
document.getElementById('logBtn').addEventListener('click', logFormData);
