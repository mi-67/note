package LamdbaDojo;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

public class question3 {

  public static void main(String[] args) {
    // @see https://www.torutk.com/projects/swe/wiki/Java%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0_Lambda%E9%81%93%E5%A0%B4
    /**
     * 問題3-1 拡張 for 文を forEach メソッドに書き換えましょう
     */
    List<String> strings = Arrays.asList("a", "b", "c", "d", "e");
    StringBuilder builder = new StringBuilder();
//    for (String s : strings) {
//      builder.append(s);
//    }
    strings.forEach(s -> builder.append(s));
    System.out.println(builder.toString());

    /**
     * 問題3-2 拡張 for 文を forEach メソッドに書き換えましょう
     */
    List<Integer> numbers = Arrays.asList(10, 5, 2, 20, 12, 15);
//    int sum = 0;
//    for (Integer number : numbers) {
//      sum += number;
//    }
    AtomicInteger sum = new AtomicInteger();
    numbers.forEach(number -> sum.addAndGet(number));
    System.out.println(sum.get());

    /**
     * 問題3-3 拡張 for 文を forEach メソッドに書き換えましょう
     */
//    for (int i = 0; i < 10; i++) {
//      System.out.println(i);
//    }
//    System.out.println();
    IntStream.range(0, 10).forEach(System.out::println);
  }

}
