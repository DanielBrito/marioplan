const initState = {
    projects: [
        {id: '1', title: 'help me find princess peach', content: 'she is in browser\'s castle'},
        {id: '2', title: 'collect all the stars', content: 'some of them are hidden'},
        {id: '3', title: 'egg hunt with yoshi', content: 'in the fields of Hyrule'}
    ]
}

const projectReducer = (state = initState, action) => {

    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log('Created project: ', action.project);
    }
    return state
}

export default projectReducer