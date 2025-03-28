export abstract class UserRepository {
    abstract create (name: string, occupation: string): Promise<void>;
}