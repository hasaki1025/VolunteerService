package org.spring.context.core.BeanFactory;

import org.spring.context.core.Registry.Definition.BeanDefinition;

public interface BeanFactory {


    public Object getBean(String name);

    public <T> T getBean(Class<T> beanClass);

    public Object instanceBean(BeanDefinition beanDefinition);

}
