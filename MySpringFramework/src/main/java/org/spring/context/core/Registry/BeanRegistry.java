package org.spring.context.core.Registry;

import java.util.List;

public interface BeanRegistry {
    public BeanDefinition[] getBeanDefinitions();
    public BeanDefinition getBeanDefinition(String name);
}
