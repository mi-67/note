package handson.chapter2;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class section5 {

  private void main() {
    // filter()
    Stream<String> stream1 = Stream.of("ABC", "DE", "FGH", "IJ", "KLMN");
    List<String> list = stream1.filter(s -> s.length() >= 3).collect(Collectors.toList());
    list.forEach(System.out::println); // ABC, FGH, KLMN

    // map()
    Stream<String> stream2 = Stream.of("abc", "de", "fghi");
    Stream<String> stream3 = stream1.map(s -> s.toUpperCase());
    stream3.forEach(System.out::println); // ABC, DE, FGHI

    Stream<Integer> stream4 = stream2.map(s -> s.length());
    stream4.forEach(System.out::println); // 3, 2, 4

    IntStream stream5 = stream2.mapToInt(s -> s.length());
    System.out.println(stream5.sum()); // 9

    // sorted()
    Stream<String> stream6 = Stream.of("EF", "WXYZ", "LMNOP", "ABC");
    stream6.sorted().forEach(System.out::println); // ABC, EF, LMNOP, WXYZ
    stream6.sorted((x1, x2) -> x1.length() - x2.length())
        .forEach(System.out::println); // EF, ABC, WXYZ, LMNOP

    Stream<Person> personStream = Stream.of(new Person("John", 38), new Person("Mike", 19),
        new Person("Bob", 26));
    personStream.sorted(Comparator.comparing(Person::getName))
        .forEach(System.out::println); // Bob -> John -> Mike の順
    personStream.sorted(Comparator.comparing(Person::getAge))
        .forEach(System.out::println); // Mike -> Bob -> John の順
  }

}
