import { LOCAL_NAME } from 'components/App';

export const phonebookState = {
  contacts: JSON.parse(localStorage.getItem(LOCAL_NAME)) || [],
  filter: '',
};
