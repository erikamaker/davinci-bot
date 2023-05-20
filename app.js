const API_KEY = "";


async function fetchData() {

    const promptInput = document.getElementById("query").value;                                         // Get the "query" value.
    document.getElementById("output").innerHTML = '<div class="loading-spinner"></div>';                // Display the loading spinner

    const response = await fetch("https://api.openai.com/v1/completions", {                             // Pass Davinci-003 endpoint
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: promptInput,
            max_tokens: 100
        })
    });

    const data = await response.json();                                                                 // Retrieve the response data
    const outputDiv = document.getElementById("output");                                                // Get the output div element
    const choices = data.choices;                                                                       // Extract choices from the data
    let textOutput = "";                                                                                // String to update

    choices.forEach(choice => {                                                                         // Iterate through each choice

        if (choice.text) {
            textOutput += choice.text;                                                                  // Concatenate the text
        }
    });

    typeWriter(outputDiv, textOutput);                                                                  // Type the text into the output div

    outputDiv.innerHTML = outputDiv.innerHTML.replace('<div class="loading-spinner"></div>', '');       // Remove the loading spinner

}


function typeWriter(element, text) {                                                                    // Function to type text character by character
    let index = 0;
    const speed = 30;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Add event listener to the input field
document.getElementById("query").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  });