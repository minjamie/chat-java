import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
@ApiTags('CHANNELS')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannel() {}

  @Get(':name')
  getSpecificChannel(@Query() query) {
    console.log(query.perPage, query.page);
  }

  @Get(':name/chat')
  getChats(@Query() query) {
    console.log(query.perPage, query.page);
  }

  @Post(':name/chats')
  postChat(@Body() body: any) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
