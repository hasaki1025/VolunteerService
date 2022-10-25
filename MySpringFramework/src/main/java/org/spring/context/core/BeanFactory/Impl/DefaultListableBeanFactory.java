package org.spring.context.core.BeanFactory.Impl;

import org.spring.context.core.BeanFactory.BeanFactory;
import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;
import org.spring.context.core.Registry.BeanDefinition;
import org.spring.context.core.Registry.BeanRegistry;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class DefaultListableBeanFactory implements ConfigurableListableBeanFactory, BeanRegistry {
    private final Map<String,Object> beanInstanceMap=new HashMap<>();
    public final Set<BeanDefinition> beanDefinitionMap=new HashSet<>();



    @Override
    public <T> T getBean(Class<T> beanClass) {
        return null;
    }

    @Override
    public Object getBean(String name) {
        return null;
    }

    @Override
    public BeanDefinition[] getBeanDefinitions() {
        return new BeanDefinition[0];
    }

    @Override
    public BeanDefinition getBeanDefinition(String name) {
        return null;
    }
}
