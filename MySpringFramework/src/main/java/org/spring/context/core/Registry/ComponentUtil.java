package org.spring.context.core.Registry;

import org.spring.context.Annotation.ComponentScan;
import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;
import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;

public class ComponentUtil {

    public static void scan(ConfigurableListableBeanFactory beanFactory)
    {
        for (BeanDefinition definition : beanFactory.getBeanDefinitions()) {
            if (definition instanceof AnnotatedBeanDefintion)
            {
                ClassAnnotationMeta meta = ((AnnotatedBeanDefintion) definition).getClassAnnotaionMeta();
                if (meta.isPresent(ComponentScan.class))
                {
                    ComponentScan componentScan = meta.getAnnotationByType(ComponentScan.class);
                    beanFactory.scan(componentScan.value());
                }
            }
        }
    }
}
