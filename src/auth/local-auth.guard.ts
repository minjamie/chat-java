import { Injectable } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContextHost): Promise<boolean> {
    const can = await super.canActivate(context);
    if (can) {
      const req = context.switchToHttp().getRequest();
      console.log('login for cookie');
      await super.logIn(req);
    }
    return true;
  }
}
