package handson.chapter2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class section4 {

  private void main() {
    // count()
    List<String> list1 = Arrays.asList("A", "B", "C", "D");
    System.out.println(list1.stream().count()); // 4

    // max(), min()
    List<String> list2 = Arrays.asList("ABC", "DE", "FGHI", "J");
    String max1 = list2.stream().max((x, y) -> x.length() - y.length()).orElse("最大値なし"); // FGHI
    String min1 = list2.stream().min((x, y) -> x.length() - y.length()).orElse("最小値なし"); // J

    List<String> list3 = List.of();
    String max2 = list3.stream().max((x, y) -> x.length() - y.length()).orElse("最大値なし"); // 最大値なし
    String min2 = list3.stream().min((x, y) -> x.length() - y.length()).orElse("最小値なし"); // 最小値なし

    // sum(), average()
    int[] arr = {1, 3, 5, 7, 9};
    var sum = Arrays.stream(arr).sum(); // 25
    var ave = Arrays.stream(arr).average().orElse(0.0); // 5.0

    // reduce() no.1
    List<String> list4 = Arrays.asList("A", "B", "C", "D", "E");
    Optional<String> optional = list4.stream().reduce((x, y) -> x + y);
    System.out.println(optional.orElse("")); // ABCDE

    // reduce() no.2
    String reduceStr = list4.stream().reduce("", (x, y) -> x + y);
    System.out.println(reduceStr); // ABCDE

    // collect()
    Stream<String> stream = Stream.of("A", "B", "C", "D", "E");
    ArrayList<String> list5 = stream.collect(() -> new ArrayList<String>(), (l, str) -> l.add(str),
        (l1, l2) -> l1.addAll(l2));
    List<String> list6 = stream.collect(Collectors.toList());
    list6.stream().forEach(System.out::println);

  }
}
