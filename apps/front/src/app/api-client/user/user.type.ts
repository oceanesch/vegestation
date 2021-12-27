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
export type GetUsersFilter = Partial<User>;

/**
 * Body to create a user
 */
export type CreateUserBody = Omit<User, 'id'>;

/**
 * Body to upsert a user
 */
export type UpsertUserBody = CreateUserBody;

/**
 * Body to update a user
 */
export type UpdateUserBody = Partial<CreateUserBody>;
