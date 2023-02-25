package LamdbaDojo;

import java.awt.BorderLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingUtilities;

/**
 * 問題2-5 Swingプログラムで使われる匿名クラス生成式を Lambda 式に書き換えましょう
 */
public class LambdaForSwing {

  private int count;

  public LambdaForSwing() {
    JFrame frame = new JFrame("Swing Lambda");
    JButton button = new JButton("Count");
    frame.add(button, BorderLayout.NORTH);
    final JLabel counter = new JLabel(String.valueOf(count));
    frame.add(counter, BorderLayout.CENTER);

//    button.addActionListener(new ActionListener() { // (1) ActionListener 匿名クラス生成式
//      @Override
//      public void actionPerformed(ActionEvent e) {
//        count++;
//        counter.setText(String.valueOf(count));
//      }
//    });

    button.addActionListener((e) -> {
      count++;
      counter.setText(String.valueOf(e));
    });

    frame.pack();
    frame.setVisible(true);
  }

  public static void main(String... arg) {
    SwingUtilities.invokeLater(new Runnable() { // (2) Runnable 匿名クラス生成式
      @Override
      public void run() {
        new SwingLambda();
      }
    });

    SwingUtilities.invokeLater(SwingLambda::new);
  }


  private static class SwingLambda {

  }
}