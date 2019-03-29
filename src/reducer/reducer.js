
const Reducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_URL': 
            return state.concat([action.data])
            //   break;

            case 'DLETE_URL': 
            return state.filter(x=>x.urlName!=action.data.urlName)
            //   break;

default:
      return state;
    }
}
export default Reducer;
