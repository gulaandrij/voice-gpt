import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private firebaseService: FirebaseService,
    ) {}

    async validateUser(idToken: string): Promise<any> {
        const decodedToken = await this.firebaseService.verifyIdToken(idToken);
        if (decodedToken) {
            const user = await this.usersService.findOne(decodedToken.uid);
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
