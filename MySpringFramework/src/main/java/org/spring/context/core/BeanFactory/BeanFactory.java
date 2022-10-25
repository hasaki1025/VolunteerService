package org.spring.context.core.BeanFactory;

public interface BeanFactory {

    public<T> T getBean(Class<T> beanClass);
    public Object getBean(String name);
}
