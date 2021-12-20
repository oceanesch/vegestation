import { CreateUserBody } from '.';
import { httpClient } from '../http-client';
import { GetUsersFilter, User } from './user.type';

/**
 * Get an array of users
 * @param filter - Allow to filter users
 * @returns an array of users
 */
export async function getUsers(filter?: GetUsersFilter) {
  return (await httpClient.get<User[]>('user', { params: filter })).data;
}

/**
 * Count how many users match the filter
 * @param filter - Filter to match
 * @returns the number of users matching the filter
 */
export async function countUsers(filter?: GetUsersFilter) {
  return (await httpClient.get<number>('user/count', { params: filter })).data;
}

/**
 * Get one user
 * @param id - Id of the user to get
 * @returns a user
 */
export async function getUser(id: string) {
  return (await httpClient.get<User>(`user/${id}`)).data;
}

/**
 * Create one user
 * @param body - Body to create a new user
 * @returns the created user
 */
export async function createUser(body: CreateUserBody) {
  return (await httpClient.post<User>('user', body)).data;
}

/**
 * Update one user
 * @param body - Body to create a new user
 * @returns the updated user
 */
export async function updateUser(id: string, body: CreateUserBody) {
  return (await httpClient.post<User>('user', body)).data;
}

/**
 * Delete one user
 * @param id - Id of the user to delete
 * @returns the deleted user
 */
export async function deleteUser(id: string) {
  return (await httpClient.delete<User>(`user/${id}`)).data;
}
