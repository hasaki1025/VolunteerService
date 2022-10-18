import java.sql.Array;
import java.util.ArrayList;

public class board {

    public int x;
    public int y;
    public int k;
    public int len;
    public int[][] b;


    public board(int x, int y, int k) {
        this.x = x;
        this.y = y;
        this.k = k;
        len= (int) Math.pow(2,k);
        b=new int[len][len];
    }

    public void ChessBoard()
    {
        int t;
        if (x>len/2)
        {
            t=y>len/2 ? 4 :2 ;
        }
        else
        {
            t=y>len/2 ? 3: 1;
        }

        ArrayList<board> list = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            list.add(new )
        }

    }
}
