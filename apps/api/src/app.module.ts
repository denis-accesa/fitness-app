import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathsModule } from './maths/maths.module';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [WorkoutsModule, ConfigModule.forRoot(), MathsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
