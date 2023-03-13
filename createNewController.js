function addPerson(){

    let maxId = getMaxPersonId();


    let newPerson = {
        id: maxId+1,
        name: model.inputs.createNew.name,
        email: model.inputs.createNew.email,
    }
    model.people.push(newPerson)


    model.app.page = 'search';
    
    updateView();
    
}