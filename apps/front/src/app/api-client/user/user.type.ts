/**
 * User model
 */
export type User = {
  id: string;
  name: string;
  email: string;
};

/**
 * Filter to get users
 */
export type GetUsersFilter = {
  id?: string;
  name?: string;
  email?: string;
};

/**
 * Body to create a user
 */
export type CreateUserBody = {
  name: string;
  email: string;
};

/**
 * Body to update a user
 */
export type UpdateUserBody = {
  name?: string;
  email?: string;
};
