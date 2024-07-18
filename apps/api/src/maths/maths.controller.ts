import { add } from '@fitness-app/shared/dist/math';
import { Controller, Get } from '@nestjs/common';

@Controller('maths')
export class MathsController {
  @Get('add')
  add(): string {
    return add(1, 2).toString();
  }
}
