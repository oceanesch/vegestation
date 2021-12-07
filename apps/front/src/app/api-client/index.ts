import { User } from '../types';
import { axios } from 'axios';

type GetUsersFilter = {
  id?: string;
  name?: string;
  email?: string;
};

export function getUsers(filter: GetUsersFilter = {}) {
  return formatHttpResponse(axios.get<User[]>(`api/user`, { params: filter }));
}

export function getUser(userId: string): Promise<User> {
  return formatHttpResponse(fetch(`api/user/${userId}`));
}

export function formatHttpResponse(httpResponse: Promise<axios.Response>) {
  return httpResponse.then((response) => {
    if (!response.ok) throw Error('Something went wrong');
    return response.json();
  });
}
