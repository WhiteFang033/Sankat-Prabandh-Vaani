<h1>Sankat Prabandh Vaani</h1>
  <br>
The SPV (Sankat Prabandh Vaani) is a comprehensive alerting system that provides a warning to the users regarding the natural calamities occurring in their local areas by continuously monitoring the news and weather feeds of that area and cross-referencing them. Then a prediction is made whether a calamity will hit or not. For this task, a large language model is employed.

- Timely alerts and mitigation measures during natural calamities can prevent loss of life.
- Our project aims to provide real-time crisis management during natural calamities by employing a large language module to provide timely warnings and mitigation measures to the people of the affected areas.
- Our project also aims to provide the whereabouts and safety of the residents and establish safe evacuation centers in the form of an app.
- Pathway provided a copy of the LLM app and a RESTful API and opened AI’s chat gpt 3.5 bundled in a single git repository.
- A RESTful or REST API is an API (Application program interface) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating, and deleting operations concerning resources.

# Working mechanism of the S.P.V
- The website of the SPV has been created using HTML and CSS and hosted with the help of git hub pages.
- When the user enters the website, the location of the user is passed on to the three APIs through the web server.
- This data now acts as the corpus for the large language model and on the basis of this corpus it determines whether the situation is in the vicinity of a disaster. All the corpus data is read by REST API. The tokenization and vector indexing of the subsequently input data is managed by chatgpt 3.5.
- Finally, the message is relayed back to the website which is made available to the end user.

 # Techstack dependencies

- Front-end development – HTML, CSS, Vanilla javascript
- Back-end development - python 3.10.12 x64 bit interpreter, pathway0.5.2 module, venv module, dockers
- API – Gnews, weather, traffic(HERE)

# User Credentials
- Shashank ( example@gmail.com )
- Vedansh ( example@gmail.com )
- Raghava ( example@gmail.com )

  Note: The backend is not yet deployed and hence doesn't have an email verification system and hence would accept any string for login credentials. 

<br> <br>
by Whitehat rookies <br> <br>
Vedansh, Shashank, Garvv, Vihar, Raghava
