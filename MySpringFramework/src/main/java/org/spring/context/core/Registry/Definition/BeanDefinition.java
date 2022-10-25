package org.spring.context.core.Registry.Definition;

public interface BeanDefinition {
    public Class<?> getBeanClass();
    public String getBeanName();

    public boolean isSingle();

}
