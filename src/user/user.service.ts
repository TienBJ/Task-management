import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: User[] = [];

    create(user: User) {
        this.users.push(user);
        return user;
    }

    findByUserName(username: string): User | undefined {
        return this.users.find(u => u.username === username);
    }
}

