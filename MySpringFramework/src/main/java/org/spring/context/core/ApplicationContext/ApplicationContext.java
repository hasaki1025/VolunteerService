package org.spring.context.core.ApplicationContext;

import org.spring.context.core.BeanFactory.BeanFactory;
import org.spring.context.core.Registry.BeanRegistry;

import java.io.Closeable;

public interface ApplicationContext extends BeanFactory, BeanRegistry {
    void registryBean(String name,Class<?> clazz);
    void refresh();
    void getBeanFactory();
}
