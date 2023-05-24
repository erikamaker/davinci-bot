# A Bot Named David

David is a JavaScript Chatbot I built leveraging a Davinci-003 endpoint.

[Screencast from 05-24-2023 05:56:05 PM.webm](https://github.com/erikamaker/davinci-bot/assets/118931925/a84f9c76-a5b4-49ac-b48c-6e80e8ccd096)


# How Does David Work?

GPT-3 (the 3rd iteration of the Generative Pre-trained Transformer developed by OpenAI) is capable of natural language processing tasks.
The "Davinci" models are known for their enhanced text completion capabilities, and so are sometimes used in tasks like chatting with people.
This project entailed wrapping Davinci-003 in JavaScript, and rendering him in HTML. 

1. The JavaScript code handles David's logic, like message sending/receiving, user input processing, interaction with the Davinci-003 endpoint, and UI updates.
2. HTML structures and defines David's UI elements, such as layout, text, and visual components.
3. JavaScript dynamically manipulates HTML elements to display chat messages, loading animation, and handle user interactions.


# Plans For David

Currently, David responds to only 1 query submission before forgetting the conversation.
* I would like to integrate a way for him to remember users, their unique API keys, and their conversations. 
* I'd like him to develop a complementerary way of speaking that is unique to each user.
* I would also like to build more exception handling to safeguard against nonsensical answers. 

