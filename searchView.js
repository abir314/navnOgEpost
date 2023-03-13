function updateViewSearch(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}
        <hr/>
        <h3>Søk</h3>
        <input type="text" 
               oninput="model.inputs.search.text = this.value"
               placeholder="skriv her"
               value= "${model.inputs.search.text || ''}"
        />
        <button onclick="updateView()">Søk</button><br/>

        <h5>Søkersultater:</h5>
        <ul>
            ${createHtmlPeople()}
        </ul>
    `;
}

function createHtmlPeople(){
    let html = '';
    let people = model.people;
    const searchText = model.inputs.search.text;

    if(searchText !== ''){
        people = filteredPeople(searchText, people);

    }

    for(let i = 0; i < people.length; i++){
        const person = people[i];
        html += `<li>
                    ${person.name} 
                    ${person.email} 
                    <button onclick="goToEditPage(${person.id})">Edit</button>
                    <button onclick="goToDeletePage(${person.id})">X</button>
                </li>`;
    }

    return html;
}

function filteredPeople(searchText, people){
    let filteredList = [];

    for(let person of people){
        if(person.name.toLowerCase().includes(searchText.toLowerCase()) ||
           person.email.toLowerCase().includes(searchText.toLowerCase()))
        filteredList.push(person);
       
    }


    return filteredList;
}