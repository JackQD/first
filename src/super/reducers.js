
export function superRootData(state = {}, action){
    switch (action.type){
        case "super_root":
            return {...state,linkIndex:action.json};
            break;
        default:
            return state;
    }
}
