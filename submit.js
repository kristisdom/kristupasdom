document.getElementById('submitButton').addEventListener('click', () => {
    const contactData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        feedback: {
            q1: parseFloat(document.getElementById('q1').value),
            q2: parseFloat(document.getElementById('q2').value),
            q3: parseFloat(document.getElementById('q3').value),
            q4: parseFloat(document.getElementById('q4').value),
            q5: parseFloat(document.getElementById('q5').value),
        }
    };

    //console.log('Collected data:', contactData);
    //alert('Data presented successfully.');
//});


    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert('Wrong email format.');
        return;
    }

    if (!phone.value.match(/^\+?[0-9]{7,15}$/)) {
        alert('Wrong mobile phone format. Input at least 7 numbers.');
        return;
    }

    if (address.length < 6) {
        alert('Address has to include at least 6 symbols.');
        return;
    }

    // Sujungimas į vientisą tekstą
    const fullAddress = `${contactData.name} ${contactData.surname}, ${contactData.address}`;

    // Skaičiuojamas vidurkis
    const feedbackValues = Object.values(contactData.feedback);
    const averageRating = (feedbackValues.reduce((sum, rating) => sum + rating, 0) / feedbackValues.length).toFixed(2);

    // Vidurkio spalva
    let color = 'green';
    if (averageRating < 4) color = 'red';
    else if (averageRating < 7) color = 'orange';

    // Atvaizduojame rezultatus tinklalapyje
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Surname:</strong> ${contactData.surname}</p>
        <p><strong>Emails:</strong> ${contactData.email}</p>
        <p><strong>Mobile number:</strong> ${contactData.phone}</p>
        <p><strong>Address:</strong> ${contactData.address}</p>
        <p class="average">${fullAddress}:<span style="color: ${color};"> ${averageRating}</span></p>

    `;
    resultContainer.style.display = 'block';
});