import type { CardProps } from "tamagui";
import { Button, Card, H4, Image, Paragraph, XStack, YStack } from "tamagui";
import CategoryList from "./CategoryList";

type WorkoutProps = CardProps & {
  title: string;
  exercisesCount: number;
  duration: number;
  imageUrl: string;
  completed: boolean;
  categories?: string[];
};

export default function Workout({
  title,
  exercisesCount,
  duration,
  imageUrl,
  completed,
  ...props
}: WorkoutProps) {
  return (
    <Card {...props}>
      <Card.Header padding="0">
        <Image
          borderRadius="$4"
          source={{
            width: 300,
            height: 200,
            uri: imageUrl,
            cache: "reload",
          }}
          width="100%" // Make image full width
          // aspectRatio={16 / 9} // Maintain aspect ratio (adjust as needed)
        />
      </Card.Header>
      <Card.Footer padding="$4">
        <XStack flex={1} justifyContent="space-between" alignItems="center">
          <YStack>
            <H4>{title}</H4>
            <Paragraph>
              {exercisesCount && `${exercisesCount} exercises`}
              {duration && ` • ${duration} min`}
              {completed && ` • Completed`}
            </Paragraph>
            <CategoryList categories={props.categories} />
          </YStack>

          {completed === false && (
            <Button bg="$green8" borderRadius="$12">
              Start
            </Button>
          )}
        </XStack>
      </Card.Footer>
    </Card>
  );
}
