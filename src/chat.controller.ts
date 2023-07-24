import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChatService } from './chat.service';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Post('audio')
    async processAudio(@Body('audio') audio: Blob) {
        // ...
    }

    @Post('text')
    async processText(@Body('text') text: string) {
        // ...
    }

    @Post('session')
    async initiateSession() {
        // ...
    }

    @UseGuards(JwtAuthGuard)
    @Get('history/:id')
    async getHistory(@Param('id') id: number) {
        // ...
    }
}
