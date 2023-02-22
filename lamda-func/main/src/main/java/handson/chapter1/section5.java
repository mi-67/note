package handson.chapter1;

import java.util.Arrays;
import java.util.List;

public class section5 {

  public static void main(String[] args) {
    List<Integer> list = Arrays.asList(5, 8, 1, 3, 4, 9, 2, 7);

    // 偶数の個数を返す
    final var result = list.stream().filter(num -> num % 2 == 0).count();

    System.out.println(result);
  }

}
