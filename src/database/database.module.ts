import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ChatSession } from './entity/chat-session.entity';
import { ChatMessage } from './entity/chat-message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, ChatSession, ChatMessage])],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
