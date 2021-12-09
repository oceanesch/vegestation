import { User } from '../types';
import { Axios, AxiosResponse } from 'axios';

type GetUsersFilter = {
  id?: string;
  name?: string;
  email?: string;
};

const httpClient = new Axios({ baseURL: 'http://localhost:4200/api' });

export async function getUsers(filter: GetUsersFilter = {}) {
  // return formatHttpResponse(Axios.get<User[]>(`api/user`, { params: filter }));
  const response = await httpClient.get<User[]>('user');
  console.log('result', response.data)
  console.log('type', typeof response.data)
  return response.data;
}

// export function getUser(userId: string): Promise<User> {
//   return formatHttpResponse(fetch(`api/user/${userId}`));
// }

// export function formatHttpResponse(httpResponse: Promise<axios.Response>) {
//   return httpResponse.then((response) => {
//     if (!response.ok) throw Error('Something went wrong');
//     return response.json();
//   });
// }
