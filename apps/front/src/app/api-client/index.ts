import { User } from '../types';
import { default as axios, AxiosResponse } from 'axios';

type GetUsersFilter = {
  id?: string;
  name?: string;
  email?: string;
};

// Instantiate axios client
const httpClient = axios.create({
  baseURL: 'http://localhost:4200/api',
  headers: { 'Content-Type': 'application/json' },
});

export async function getUsers(filter: GetUsersFilter = {}) {
  return (await httpClient.get<User[]>('user', { params: filter })).data;
}
