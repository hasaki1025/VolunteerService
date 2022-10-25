import java.lang.reflect.Field;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        Class<? extends ArrayList> listClass = list.getClass();
        Field[] fields = listClass.getFields();
        fields[0].g
    }
}
