package handson.chapter2;

import java.util.Arrays;
import java.util.List;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.LongStream;
import java.util.stream.Stream;

public class section1 {

  private void main() {

    // コレクションから stream を取得
    List<String> list = Arrays.asList("A", "B", "C", "D");
    Stream<String> stream = list.stream();

    // 配列から stream オブジェクトを取得
    String[] arr1 = {"A", "B", "C"};
    Stream<String> stream1 = Arrays.stream(arr1);

    int[] arr2 = {1, 2, 3};
    IntStream stream2 = Arrays.stream(arr2);

    long[] arr3 = {1L, 2L, 3L};
    LongStream stream3 = Arrays.stream(arr3);

    double[] arr4 = {1.0, 2.0, 3.0};
    DoubleStream stream4 = Arrays.stream(arr4);
  }
}
