import {Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { User } from './user.entity';
import { ChatMessage } from './chat-message.entity';

@Entity()
export class ChatSession {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.sessions)
    user: User;

    @OneToMany(() => ChatMessage, message => message.session)
    messages: ChatMessage[];
}
