package org.spring.context.core.ApplicationContext;

import org.spring.context.core.BeanFactory.Impl.DefaultListableBeanFactory;
import org.spring.context.core.BeanPostProcessor.BeanFactoryPostProcessor;
import org.spring.context.core.Registry.AnnotationConfigRegistry;
import org.spring.context.core.Registry.BeanDefinitionReader;
import org.spring.context.core.Registry.Definition.BeanDefinition;

import java.util.ArrayList;
import java.util.List;

public class AnnotationConfigApplicationContext implements ConfigurableApplicationContext  {


    DefaultListableBeanFactory beanFactory=new DefaultListableBeanFactory();

    private final List<BeanFactoryPostProcessor> beanFactoryPostProcessorsInstance = new ArrayList<>();

    BeanDefinitionReader beanDefinitionReader;

    public AnnotationConfigApplicationContext() {
        beanDefinitionReader=new BeanDefinitionReader(this);
        beanDefinitionReader.registerAnnotationConfigProcessors();//注册8个初始化BeanPostProcessor
    }

    public AnnotationConfigApplicationContext(Class<?>...componentClasses) {
        this();
        register(componentClasses);
        refresh();
    }


    @Override
    public void refresh() {//TODO
        initBeanFactoryPostProcessors();
        invokeBeanFactoryPostProcessors();
        finishBeanFactoryInitialization();
    }

    private void initBeanFactoryPostProcessors() {
        for (BeanDefinition beanDefinition : beanFactory.getAllBeanFactoryProcessorBeanDefiniton()) {

        }
    }

    @Override
    public void addBeanFactoryPostProcessor(BeanFactoryPostProcessor postProcessor) {
        beanFactoryPostProcessorsInstance.add(postProcessor);
    }

    @Override
    public DefaultListableBeanFactory getBeanFactory() {
        return beanFactory;
    }


    @Override
    public Object getBean(String name) {
        return beanFactory.getBean(name);
    }

    @Override
    public <T> T getBean(Class<T> beanClass) {
        return beanFactory.getBean(beanClass);
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
        for (BeanFactoryPostProcessor processor : beanFactoryPostProcessorsInstance) {
            processor.postProcessBeanFactory(beanFactory);
        }
    }

    void finishBeanFactoryInitialization()//TODO
    {

    }

    @Override
    public void register(Class<?>... componentClasses) {
        beanDefinitionReader.registerBeans(componentClasses);
    }

    @Override
    public void scan(String... basepackages) {
        beanFactory.scan(basepackages);
    }

    @Override
    public void registerAnnotationConfigProcessor(String name ,Class<?> clazz) {
        beanFactory.registerAnnotationConfigProcessor(name,clazz);
    }



}
