package org.spring.context.core.ApplicationContext;

import org.spring.context.core.Registry.AnnotationConfigRegistry;
import org.spring.context.core.Registry.BeanDefinitionReader;

public class AnnotationConfigApplicationContext extends GenericApplicationContext implements AnnotationConfigRegistry {
    BeanDefinitionReader beanDefinitionReader;

    public AnnotationConfigApplicationContext() {
        beanDefinitionReader=new BeanDefinitionReader(this);
        beanDefinitionReader.registerAnnotationConfigProcessors();//注册8个初始化BeanPostProcessor
    }

    public AnnotationConfigApplicationContext(Class<?>...componentClasses) {
        this();
        register(componentClasses);
        refresh();
    }

    @Override
    public void register(Class<?>... componentClasses) {
        beanDefinitionReader.registerBeans(componentClasses);
    }

    @Override
    public void scan(String... basepackages) {
        beanFactory.scan(basepackages);
    }


}
