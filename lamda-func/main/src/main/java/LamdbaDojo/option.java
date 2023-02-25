package LamdbaDojo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class option {

  public static void main(String[] args) {
    /**
     * オプション1
     */
    Random random = new Random();
    List<Double> numbers = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
      numbers.add(random.nextDouble());
    }

    IntStream.range(0, 100).mapToObj(x -> random.nextDouble()).collect(Collectors.toList());
  }

}
