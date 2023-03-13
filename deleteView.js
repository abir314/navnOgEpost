function updateViewDelete(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <hr/>
    ${createPersonDeleteHtml()}
    <h3>Slett</h3><br/>
    <input type="checkbox" ${model.inputs.delete.isAreYouSureChecked}
    onchange="changeSamtykkeBox()"/> Er du sikker at du vil slette?<br/>
    <button onclick="deletePerson()">Slett</button>



`;
}
function createPersonDeleteHtml(){
    const personId = model.inputs.delete.personId;
    const person = findPersonById(personId);
    return /*html*/ `
        Navn: ${person.name}<br/>
        Email: ${person.email}<br
    `;
}