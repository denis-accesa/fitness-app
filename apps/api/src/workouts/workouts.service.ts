import { WorkoutDto } from '@fitness-app/shared/dist/types/workout.dto';
import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutsService {
  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  findAll(): WorkoutDto[] {
    const workouts: WorkoutDto[] = [
      {
        id: 1,
        title: 'Upper Body',
        exercisesCount: 5,
        duration: 30,
        imageUrl: 'https://picsum.photos/300/200',
        completed: true,
        categories: ['strength', 'cardio'],
        favorite: false,
      },
      {
        id: 2,
        title: 'Lower Body',
        exercisesCount: 7,
        duration: 45,
        imageUrl: 'https://picsum.photos/300/200',
        completed: false,
        categories: ['cardio'],
        favorite: true,
      },
      {
        id: 3,
        title: 'Full Body',
        exercisesCount: 12,
        duration: 75,
        imageUrl: 'https://picsum.photos/300/200',
        completed: false,
        categories: ['strength', 'toning', 'cardio'],
        favorite: false,
      },
    ];

    return workouts;
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
