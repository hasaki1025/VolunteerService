package org.spring.context.core.Registry;

import org.spring.context.core.Registry.Definition.BeanDefinition;

public interface BeanRegistry {
    public BeanDefinition[] getBeanDefinitions();

    public BeanDefinition getBeanDefinition(String name);

    public BeanDefinition getBeanDefintionByClass(Class<?> clazz);

    public void registerBeanDefintion(BeanDefinition beanDefinition);

    boolean isBeanNameInUse(String beanName);
}
