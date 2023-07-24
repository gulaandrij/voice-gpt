import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { ChatSession } from './chat-session.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string; // remember to hash the password in production

    @OneToMany(() => ChatSession, (session) => session.user)
    sessions: ChatSession[];
}
