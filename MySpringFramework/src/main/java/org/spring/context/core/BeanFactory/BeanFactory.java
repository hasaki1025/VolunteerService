package org.spring.context.core.BeanFactory;

public interface BeanFactory {

    public Object getBean(Class<?> beanClass);
    public Object getBean(String name);


}
