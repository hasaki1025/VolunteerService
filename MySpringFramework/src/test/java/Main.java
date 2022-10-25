import org.spring.context.Annotation.Bean;
import org.spring.context.core.ApplicationContext.AnnotationConfigApplicationContext;
import org.spring.context.core.Registry.Definition.BeanDefinition;
import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;

import java.lang.reflect.Field;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
        System.out.println(context.getBeanDefinitions().length);
        for (BeanDefinition b : context.getBeanDefinitions()) {
            System.out.println(b);
        }
    }
}
