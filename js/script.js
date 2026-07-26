document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let passengers = document.getElementById("passengers").value;
    let vehicle = document.getElementById("vehicle").value;

    let message =
`🚖 *New Taxi Booking*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Pickup: ${pickup}

🏁 Destination: ${destination}

📅 Journey Date: ${date}

🕒 Pickup Time: ${time}

👥 Passengers: ${passengers}

🚘 Vehicle: ${vehicle}

Please confirm my booking.

Thank you.
`;

    let phoneNumber = "919773146719";

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});

// Back to Top

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

}

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}