import { useRouter } from "expo-router";
import { ScrollView, YStack } from "tamagui";
import Workout from "../../components/Workout";

const workouts = [
  {
    id: 1,
    title: "Upper Body",
    exercisesCount: 5,
    duration: 30,
    imageUrl: "https://picsum.photos/300/200",
    completed: true,
    categories: ["strength", "cardio"],
  },
  {
    id: 2,
    title: "Lower Body",
    exercisesCount: 7,
    duration: 45,
    imageUrl: "https://picsum.photos/300/200",
    completed: false,
    categories: ["cardio"],
  },
  {
    id: 3,
    title: "Full Body",
    exercisesCount: 12,
    duration: 75,
    imageUrl: "https://picsum.photos/300/200",
    completed: false,
    categories: ["strength", "toning", "cardio"],
  },
];

export default function WorkoutsScreen() {
  const router = useRouter();

  return (
    <YStack flex={1}>
      <ScrollView>
        <YStack gap="$4" padding="$4">
          {workouts.map(({ id, ...workout }) => (
            <Workout
              key={id}
              animation={"bouncy"}
              size="$4"
              // width={250}
              // height={300}
              //   onPress={() => {
              //     // if(!workout.completed) {
              //     //   router.navigate('Workout', { workout })
              //     // }
              //   }}
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={workout.completed ? null : { scale: 0.875 }}
              padded={false}
              {...workout}
            />
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
