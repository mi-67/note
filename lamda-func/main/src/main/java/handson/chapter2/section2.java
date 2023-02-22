package handson.chapter2;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Stream;

public class section2 {

  private void main() {

    // Supplier<T> インタフェース
    // supplier = 供給者
    Stream<Double> stream = Stream.generate(Math::random).limit(100);

    // Consumer<T> インタフェース
    // consumer = 消費者
    List<String> stringList = Arrays.asList("A", "B", "C");
    stringList.stream().forEach(System.out::println);

    // Predicate<T> インタフェース
    // predicate = 述語
    List<String> list = Arrays.asList("ABC", "DE", "FGHI");
    Predicate<String> predicate = s -> s.length() >= 3;
    boolean all = list.stream().allMatch(predicate);
    boolean any = list.stream().anyMatch(predicate);
    boolean none = list.stream().noneMatch(predicate);

    // UnaryOperator<T> インタフェース
    Stream.iterate(1, x -> x * 10).limit(5).forEach(System.out::println);

  }

}
