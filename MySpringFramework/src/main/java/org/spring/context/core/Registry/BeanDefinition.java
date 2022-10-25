package org.spring.context.core.Registry;

public interface BeanDefinition {
    public Class<?> getBeanClass(String name);
    public String[] getBeanName(Class<?> clazz);
}
