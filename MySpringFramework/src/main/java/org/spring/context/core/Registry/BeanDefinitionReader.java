package org.spring.context.core.Registry;

import org.spring.context.core.ApplicationContext.ConfigurableApplicationContext;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;

public class BeanDefinitionReader {

    AnnotationConfigRegistry registry;

    private final String[] BEAN_FACTORY_POST_PROCESSOR =new String[]{"org.spring.context.core.BeanPostProcessor.ConfigurationBeanFactoryPostProcessor"};//TODO

    public void registerBean(String name, Class<?> clazz)
    {
        if (!registry.isBeanNameInUse(name))
        {
            registry.registerBeanDefintion(new AnnotatedBeanDefintion(name,clazz));
        }
    }

    public void registerBeans(Class<?>...clazz)
    {
        for (Class<?> c : clazz) {
            registerBean(c.getSimpleName(),c);
        }
    }

    public BeanDefinitionReader(AnnotationConfigRegistry registry) {
        if(registry instanceof ConfigurableApplicationContext)
        {
            this.registry = ((ConfigurableApplicationContext)registry).getBeanFactory();
        }
        else {
            this.registry=registry;
        }

    }

    public void registerAnnotationConfigProcessors() {//TODO
        for (String s : BEAN_FACTORY_POST_PROCESSOR) {
            try {
                Class<?> clazz = Class.forName(s);
                registry.registerAnnotationConfigProcessor(clazz.getSimpleName(),clazz);
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

    }
}
