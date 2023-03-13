function deletePerson(){
    if(model.inputs.delete.isAreYouSureChecked === ''){
        alert('You have to tick the box!!');
    }
    else{
    const index = findPersonIndexById(model.inputs.delete.personId);
    model.people.splice(index, 1);
    model.app.page = 'search';
    model.inputs.delete.isAreYouSureChecked = '';
    updateView();
    }
}
function changeSamtykkeBox(){
    let checkBox = model.inputs.delete.isAreYouSureChecked;
    if(checkBox === 'checked') model.inputs.delete.isAreYouSureChecked = '';
    else model.inputs.delete.isAreYouSureChecked = 'checked';
    updateView();
}