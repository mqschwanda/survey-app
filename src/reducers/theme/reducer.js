const defaultState = {};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
  case 'NONE': return {};
  case 'UPDATE_THEME':
    return { ...action.payload };
  default: return { ...state };
  }
}
