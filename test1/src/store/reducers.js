import { combineReducers } from 'redux'


/**
 * @return {string}
 */
function curUsers (state = "Admin",action) {
    return action.text ? action.text : state
}

function consoleLog(text = -1, action) {
    if(action.type === "console"){
        return {
            value : action.text
        }
    }
    return ++text
}

const todoApp = combineReducers({
    curUsers,
});

export default todoApp


