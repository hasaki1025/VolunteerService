package org.spring.context.core.ApplicationContext;

import org.spring.context.core.BeanFactory.BeanFactory;
import org.spring.context.core.BeanFactory.Impl.DefaultListableBeanFactory;
import org.spring.context.core.BeanPostProcessor.BeanFactoryPostProcessor;
import org.spring.context.core.Registry.AnnotationConfigRegistry;
import org.spring.context.core.Registry.BeanRegistry;

import java.io.Closeable;

public interface ConfigurableApplicationContext extends BeanFactory, AnnotationConfigRegistry {
    void refresh();
    void addBeanFactoryPostProcessor(BeanFactoryPostProcessor postProcessor);
    DefaultListableBeanFactory getBeanFactory();

}
