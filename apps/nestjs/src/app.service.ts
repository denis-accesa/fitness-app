import { WorkoutDto } from '@fitness-app/shared/dist/types/workout.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const workout: WorkoutDto = {
      id: 1,
      title: 'Test Workout',
      exercisesCount: 5,
      duration: 30,
      imageUrl: 'https://via.placeholder.com/150',
      completed: false,
      categories: ['test'],
      favorite: false,
    };

    console.log(workout);

    return 'Hello World!';
  }
}
