package org.spring.context.core.Registry.BeanDefinition;

public interface BeanDefinition {
    public Class<?> getBeanClass();
    public String getBeanName();

    public boolean isSingle();
}
