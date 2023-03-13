function updateViewCreateNew(){


        document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}
        <hr/>
        <h3>Add new person.</h3>
        ${createPersonAddHtml()}
        
        <button onclick="addPerson()">Add</button>
    
    `;
    }
    function createPersonAddHtml(){
        
        return /*html*/ `
            Navn: <br/>
            <input 
                type="text" 
                value = "${model.inputs.createNew.name}"
                oninput = "model.inputs.createNew.name = this.value"
            />
            <br/>
            Email: <br/>
            <input 
                type="text" 
                value = "${model.inputs.createNew.email}"
                oninput = "model.inputs.createNew.email = this.value"
            />
            <br/>
        `;
    

    
}