package org.spring.context.core.BeanPostProcessor;

import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;

public interface BeanFactoryPostProcessor {
    void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory);
}
