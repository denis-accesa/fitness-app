import { Button, XStack, useTheme } from "tamagui";

export default function CategoryList({
  categories,
}: {
  categories?: string[];
}) {
  const theme = useTheme();

  if (!categories) return null;

  return (
    <XStack gap="$2" pt="$2">
      {categories?.map((category) => (
        <Button
          key={category}
          // theme={theme.red10.val}
          style={{ borderColor: theme.red10.val, color: theme.red10.val }}
          size="$2"
          variant="outlined"
          disabled
        >
          {category}
        </Button>
      ))}
    </XStack>
  );
}
