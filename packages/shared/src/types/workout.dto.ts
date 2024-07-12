export interface WorkoutDto {
  id: number;
  title: string;
  exercisesCount: number;
  duration: number;
  imageUrl: string;
  completed: boolean;
  categories?: string[];
  favorite?: boolean;
}
