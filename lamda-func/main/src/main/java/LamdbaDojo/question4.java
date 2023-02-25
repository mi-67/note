package LamdbaDojo;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class question4 {

  public static void main(String[] args) throws FileNotFoundException {
    // @see https://www.torutk.com/projects/swe/wiki/Java%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0_Lambda%E9%81%93%E5%A0%B4
    /**
     * 問題4-1 拡張 for 文を Stream に書き換えましょう
     */
    List<Integer> numbers1 = Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//    for (Integer x : numbers) {
//      if (x % 2 == 0) {
//        System.out.println(x);
//      }
//    }
    numbers1.stream()
        .filter(x -> x % 2 == 0)
        .forEach(System.out::println);
    System.out.println();

    /**
     * 問題4-2 拡張 for 文を Stream に書き換えましょう
     */
    Random random = new Random();
    List<Double> numbers2 = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
      numbers2.add(random.nextDouble());
    }

    double ave = 0.0;
//    for (Double x : numbers2) {
//      ave += x;
//    }
//    ave /= numbers2.size();
    ave = numbers2.stream().reduce(0.0, (x, y) -> x + y) / numbers2.size();

    double div = 0.0;
    for (Double x : numbers2) {
      div += (x - ave) * (x - ave);
    }
    div /= numbers2.size();

    /**
     * 問題4-3 拡張 for 文を Stream に書き換えましょう
     */
    var fileName = "fileName";
    try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
//      int wordCount = 0;
//      for (; ; ) {
//        var line = reader.readLine();
//        if (line == null) {
//          break;
//        }
//        String[] words = line.split(" ");
//        wordCount += words.length;
//      }
      long wordCount = reader.lines().flatMap(l -> Arrays.stream(l.split(" "))).count();

      System.out.println(wordCount);
    } catch (IOException ignored) {

    }

  }
}
