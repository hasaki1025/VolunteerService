import org.spring.context.Annotation.Bean;
import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;

import java.lang.reflect.Field;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println(new ClassAnnotationMeta(Config.class).getMethodAnnotationMetaMap().get("bean01").getAnnotationByType(Bean.class));
    }
}
