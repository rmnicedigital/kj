function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
  
    const message = `Name: ${name}%0AMobile: ${mobile}%0AEmail: ${email}`;
    const phoneNumber = "919444248188"; // Replace with your WhatsApp number
  
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }