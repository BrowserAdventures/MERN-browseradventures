import {db_book, db_bookDescription} from '../../../../firebase'

export const add_description=(id, description)=>
{
    return dispatch => {
        db_book(id).push({description: description})

        dispatch({type: 'SUBMIT'})
    }
}

export const delete_description=(book, description)=>
{
    return dispatch => db_bookDescription(book, description).remove()
}

export const get_descriptions=(id)=>
{
    return dispatch => db_book(id).on('value', (snapshot)=> {
        let descriptions = snapshot.val();
        let updateDescriptions = [];
        for (let self in descriptions) {
            updateDescriptions.push({
                id: self,
                description: descriptions[self].description,
            });
        }
        dispatch({
            type: 'GET_DESCRIPTIONS',
            descriptions: updateDescriptions
        })
    })

}
