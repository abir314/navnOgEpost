function updateViewEdit(){

        document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}
        <hr/>
        ${createPersonEditHtml()}
        
        <button onclick="editPerson()">Edit</button>
    
    `;
    }
    function createPersonEditHtml(){
        const personId = model.inputs.edit.personId;

        return /*html*/ `
            Navn: <br/>
            <input 
                type="text" 
                value = "${model.inputs.edit.name}"
                oninput = "model.inputs.edit.name = this.value"
            />
            <br/>
            Email: <br/>
            <input 
                type="text" 
                value = "${model.inputs.edit.email}"
                oninput = "model.inputs.edit.email = this.value"
            />
            <br/>
        `;
    }
