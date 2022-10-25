package org.spring.context.core.BeanFactory;

import org.spring.context.core.Registry.AnnotationConfigRegistry;
import org.spring.context.core.Registry.BeanRegistry;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;

public interface ConfigurableListableBeanFactory extends BeanFactory, AnnotationConfigRegistry {
    BeanDefinition[] getAllConfigutaionBean();

    void addConfigurationBeanDefintion(String name, BeanDefinition beanDefintion);

    boolean containsBeanDefintion(Class<?> clazz);

}
