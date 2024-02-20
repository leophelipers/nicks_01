import UserRepository from "../repositories/userRepository";
import UserEntity from "../entities/userEntity";

const repo = new UserRepository();

/**
 * Get all users from the repository
 * @returns Promise<UserEntity[]>
 */
export const getAllUsers = async (): Promise<UserEntity[]> => {
  return repo.getAll();
};

/**
 * Get single user from the repository
 * @param id Id of the user
 * @returns Promise<UserEntity | null>
 */
export const getSingleUser = async (
  id: number
): Promise<UserEntity | null> => {
  return repo.getById(id);
};

/**
 * Create a new user in the repository
 * @param user User Entity to be created
 * @returns Promise<UserEntity>
 */
export const createUser = async (
  user: Omit<UserEntity, "id">
): Promise<UserEntity> => {
  return repo.create(user);
};

/**
 * Update user in the repository
 * @param id Id of the user to be updated
 * @param user User Entity to be updated
 * @returns Promise<UserEntity | null>
 */
export const updateUser = async (
  id: number,
  user: Partial<Omit<UserEntity, "id">>
): Promise<UserEntity | null> => {
  return repo.update(id, user);
};

/**
 * Delete user from the repository
 * @param id Id of the user to be deleted
 * @returns Promise<void>
 */
export const deleteUser = async (id: number): Promise<void> => {
  return repo.delete(id);
};