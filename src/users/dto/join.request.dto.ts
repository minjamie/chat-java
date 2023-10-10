import { ApiTags, PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

@ApiTags('DM')
export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}
