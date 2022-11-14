package org.spring.context.core.BeanFactory.Impl;

import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;

import java.util.*;
import java.util.function.Function;

public class DefaultListableBeanFactory implements ConfigurableListableBeanFactory {
    private final Map<String, Object> beanInstanceMap = new HashMap<>();//todo
    private final Map<Class<?>, Object> beanInstanceClassMap = new HashMap<>();//todo
    public final Set<BeanDefinition> beanDefinitionSet = new HashSet<>();

    private final Map<String,BeanDefinition> beanDefinitionMap=new HashMap<>();
    private final Set<Class<?>> beanDefinitionClass=new HashSet<>();
    private final Map<String,BeanDefinition> configurationBeanDefinitionMap=new HashMap<>();

    private final Map<Class<?>, BeanDefinition> beanFactoryPostProcessorBeanDefiniton=new HashMap<>();


    public<T> T getOrInstanceBean(Class<T>  clazz)
    {
        BeanDefinition definition = (clazz);
        Object o = beanInstanceClassMap.computeIfAbsent(definition.getBeanName(), x->{

        });
        return null;
    }

    public Object instanceBean(BeanDefinition definition) {

    }

    public BeanDefinition getBeanFactoryProcessorBeanDefiniton(Class<?> clazz)
    {
        return beanFactoryPostProcessorBeanDefiniton.get(clazz);
    }

    public BeanDefinition[] getAllBeanFactoryProcessorBeanDefiniton()
    {
        return beanFactoryPostProcessorBeanDefiniton.values().toArray(new BeanDefinition[0]);
    }


    @Override
    public Object getBean(String name) {
        return beanInstanceMap.get(name);
    }

    @Override
    public <T> T getBean(Class<T> beanClass) {
        return null;
    }

    @Override
    public BeanDefinition[] getBeanDefinitions() {
        return beanDefinitionMap.values().toArray(new BeanDefinition[0]);
    }

    @Override
    public BeanDefinition getBeanDefinition(String name) {
        return beanDefinitionMap.get(name);
    }

    @Override
    public void registerBeanDefintion(BeanDefinition beanDefinition) {
        beanDefinitionSet.add(beanDefinition);
        beanDefinitionMap.put(beanDefinition.getBeanName(),beanDefinition);
        beanDefinitionClass.add(beanDefinition.getBeanClass());
    }
    @Override
    public BeanDefinition getBeanDefintionByClass(Class<?> clazz)
    {
        for (BeanDefinition beanDefinition : beanDefinitionMap.values()) {
            if (beanDefinition.getBeanClass().equals(clazz))
            {
                return beanDefinition;
            }
        }
        return null;
    }

    @Override
    public boolean isBeanNameInUse(String beanName) {
        return beanDefinitionMap.get(beanName)!=null;
    }
    @Override
    public void registerAnnotationConfigProcessor(String name ,Class<?> clazz)//TODO
    {
        AnnotatedBeanDefintion beanDefintion = new AnnotatedBeanDefintion(name, clazz);
        registerBeanDefintion(beanDefintion);
        beanFactoryPostProcessorBeanDefiniton.put(beanDefintion.getBeanClass(),beanDefintion);
    }

    @Override
    public BeanDefinition[] getAllConfigutaionBean() {
        return configurationBeanDefinitionMap.values().toArray(new BeanDefinition[0]);
    }

    @Override
    public void addConfigurationBeanDefintion(String name, BeanDefinition beanDefintion) {
        configurationBeanDefinitionMap.put(name,beanDefintion);
    }

    @Override
    public boolean containsBeanDefintion(Class<?> clazz) {
        return beanDefinitionClass.contains(clazz);
    }

    @Override
    public void register(Class<?>... componentClasses) {

    }

    @Override
    public void scan(String... basepackages) {
        for (String basepackage : basepackages) {
            for (Class<?> definitionClass : beanDefinitionClass) {
                if (definitionClass.getName().startsWith(basepackage)) {
                    if (!containsBeanDefintion(definitionClass)) {
                        registerBeanDefintion(new AnnotatedBeanDefintion(definitionClass.getSimpleName(),definitionClass));
                    }
                }
            }
        }
    }
}
