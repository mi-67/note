package LamdbaDojo;

import java.util.Comparator;
import java.util.Date;
import java.util.concurrent.Callable;

public class question2 {
  // @see https://www.torutk.com/projects/swe/wiki/Java%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0_Lambda%E9%81%93%E5%A0%B4
  /**
   * 問題2-1 次の匿名クラス生成式を Lambda 式に書き換えましょう
   */
//  Comparator<Integer> comparator1 = new Comparator<Integer>() {
//    @Override
//    public int compare(Integer x, Integer y) {
//      return x - y;
//    }
//  };
  Comparator<Integer> comparator1 = (x, y) -> x - y;

  /**
   * 問題2-2 次の匿名クラス生成式を Lambda 式に書き換えましょう
   */
//  Callable<Date> callable1 = new Callable<Date>() {
//    @Override
//    public Date call() throws Exception {
//      return new Date();
//    }
//  };

  Callable<Date> callable1 = Date::new;

  /**
   * 問題2-3 次の匿名クラス生成式を Lambda 式に書き換えましょう
   */
//  Runnable runnable1 = new Runnable() {
//    @Override
//    public void run() {
//      doSomething();
//    }
//  };
  Runnable runnable1 = () -> doSomething();

  /**
   * 問題2-4 次の匿名クラス生成式を Lambda 式に書き換えましょう
   */
  @FunctionalInterface
  public interface Doubler<T extends Number> {

    T doDouble(T x);
  }

  // ----
//  Doubler<Double> doubler = new Doubler<Double>() {
//    @Override
//    public Double doDouble(Double x) {
//      return 2.0 * x;
//    }
//  };

  Doubler<Double> doubler = x -> 2.0 * x;
  

  public void doSomething() {
  }

}
