import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query, Post, Body } from '@nestjs/common';

@ApiTags('DMS')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':name/chat')
  getChat(@Query() query) {
    console.log(query.perPage, query.page);
  }

  @Post(':name/chats')
  postChat(@Body() body: any) {}
}
