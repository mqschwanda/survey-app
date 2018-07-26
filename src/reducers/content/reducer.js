import { content } from '../../modules/content';

const defaultState = content;

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
  case 'NONE': return {};
  default: return { ...state };
  }
}
