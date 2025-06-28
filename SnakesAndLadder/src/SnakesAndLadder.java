import java.util.*;

public class SnakesAndLadder {
    public static void main(String[] args) {
        Map<Integer, Integer> snakes = new HashMap<>();
        Map<Integer, Integer> ladders = new HashMap<>();

        // Snakes: head to tail
        snakes.put(98, 28);
        snakes.put(95, 24);
        snakes.put(92, 51);
        snakes.put(62, 18);
        snakes.put(49, 11);

        // Ladders: bottom to top
        ladders.put(4, 14);
        ladders.put(9, 31);
        ladders.put(20, 38);
        ladders.put(28, 84);
        ladders.put(40, 59);
        ladders.put(63, 81);
        ladders.put(71, 91);

        int position = 0;
        Random rand = new Random();
        Scanner scanner = new Scanner(System.in);

        System.out.println("🎲 Welcome to Snakes and Ladders!");

        while (position < 100) {
            System.out.println("\nYou are at position: " + position);
            System.out.print("Press Enter to roll the dice...");
            scanner.nextLine(); // Wait for Enter

            int dice = rand.nextInt(6) + 1; // 1 to 6
            System.out.println("You rolled: " + dice);

            if (position + dice <= 100) {
                position += dice;

                if (snakes.containsKey(position)) {
                    System.out.println("Oops! Bitten by snake 🐍. Down to " + snakes.get(position));
                    position = snakes.get(position);
                } else if (ladders.containsKey(position)) {
                    System.out.println("Yay! Climbed a ladder 🪜. Up to " + ladders.get(position));
                    position = ladders.get(position);
                }
            } else {
                System.out.println("Can't move, you need exactly " + (100 - position));
            }

            if (position == 100) {
                System.out.println("🎉 Congratulations! You won!");
            }
        }

        scanner.close();
    }
}
