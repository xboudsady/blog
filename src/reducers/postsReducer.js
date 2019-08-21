// Set the initital default state being returned as an emptty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload;
    default:
      return state;
  }
};