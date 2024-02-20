import { UserEntity } from "../entities/userEntity";

export class UserRepository {
  private users: UserEntity[];

  constructor() {
    this.users = [];
  }

  public async create(user: UserEntity): Promise<UserEntity> {
    this.users.push(user);
    return user;
  }

  public async getAll(): Promise<UserEntity[]> {
    return this.users;
  }

  public async getById(userId: number): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.id === userId);
    return user ?? null;
  }

  public async update(userId: number, user: Partial<UserEntity>): Promise<UserEntity | null> {
    let updatedUser: UserEntity | null = null;

    const index = this.users.findIndex((u) => u.id === userId);

    if (index > -1) {
      this.users[index] = { ...this.users[index], ...user };
      updatedUser = this.users[index];
    }

    return updatedUser;
  }

  public async delete(userId: number): Promise<void> {
    const index = this.users.findIndex((u) => u.id === userId);

    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}