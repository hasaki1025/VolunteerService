package org.spring.context.core.Registry;

import org.spring.context.core.Registry.BeanDefinition.BeanDefinition;

public interface BeanRegistry {
    public BeanDefinition[] getBeanDefinitions();

    public BeanDefinition getBeanDefinition(String name);

    public void registerBeanDefintion(String name, Class<?> clazz);
}
