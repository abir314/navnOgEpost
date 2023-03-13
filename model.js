const model = {
    app: {
        page: 'search', 
    },

    inputs: {
        search: {
            text: '',
        },
        createNew: {
            name: '',
            email: '',
            personId: '',
        },
        delete: {
            isAreYouSureChecked: '',
            personId: null,
        },
        edit: {
            personId: null,
            name: '',
            email: '',
        }

    },

    // data

    people: [
        {id:1, name: 'Per', email: 'per@mail.com'},
        {id:2, name: 'Pål', email: 'pål@hotmail.com'},
        {id:3,  name: 'Espen', email: 'espen@getacademy.no'},
    ],
};