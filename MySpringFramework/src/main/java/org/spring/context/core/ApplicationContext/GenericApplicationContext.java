package org.spring.context.core.ApplicationContext;

import org.spring.context.core.BeanFactory.BeanFactory;
import org.spring.context.core.BeanFactory.Impl.DefaultListableBeanFactory;
import org.spring.context.core.BeanPostProcessor.BeanFactoryPostProcessor;
import org.spring.context.core.Registry.Definition.BeanDefinition;

import java.util.ArrayList;
import java.util.List;

public class GenericApplicationContext implements ConfigurableApplicationContext {

    DefaultListableBeanFactory beanFactory=new DefaultListableBeanFactory();

    private final List<BeanFactoryPostProcessor> beanFactoryPostProcessors = new ArrayList<>();


    @Override
    public void refresh() {//TODO
        initBeanFactoryPostProcessors();
        invokeBeanFactoryPostProcessors();
        finishBeanFactoryInitialization();
    }

    private void initBeanFactoryPostProcessors() {

    }

    @Override
    public void addBeanFactoryPostProcessor(BeanFactoryPostProcessor postProcessor) {
        beanFactoryPostProcessors.add(postProcessor);
    }

    @Override
    public DefaultListableBeanFactory getBeanFactory() {
        return beanFactory;
    }

    @Override
    public <T> T[] getBean(Class<T> beanClass) {
        return beanFactory.getBean(beanClass);
    }

    @Override
    public Object getBean(String name) {
        return beanFactory.getBean(name);
    }

    @Override
    public BeanDefinition[] getBeanDefinitions() {
        return beanFactory.getBeanDefinitions();
    }

    @Override
    public BeanDefinition getBeanDefinition(String name) {
        return beanFactory.getBeanDefinition(name);
    }

    @Override
    public void registerBeanDefintion(BeanDefinition beanDefinition) {
            beanFactory.registerBeanDefintion(beanDefinition);
    }

    @Override
    public boolean isBeanNameInUse(String beanName) {
        return beanFactory.isBeanNameInUse(beanName);
    }

    void invokeBeanFactoryPostProcessors()//TODO
    {
        for (BeanFactoryPostProcessor processor : beanFactoryPostProcessors) {
            processor.postProcessBeanFactory(beanFactory);
        }
    }

    void finishBeanFactoryInitialization()//TODO
    {

    }
}
