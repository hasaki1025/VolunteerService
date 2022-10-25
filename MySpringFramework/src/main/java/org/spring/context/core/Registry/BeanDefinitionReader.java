package org.spring.context.core.Registry;

public interface BeanDefinitionReader {
    public BeanDefinition createBeanDefinition(String name,Class<?> clazz);
    public BeanDefinition createBeanDefinition(Class<?> clazz);
}
