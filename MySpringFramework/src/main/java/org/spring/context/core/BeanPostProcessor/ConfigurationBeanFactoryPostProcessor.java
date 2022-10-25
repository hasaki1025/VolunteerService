package org.spring.context.core.BeanPostProcessor;

import org.spring.context.Annotation.Bean;
import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;
import org.spring.context.core.Registry.ComponentUtil;
import org.spring.context.core.Registry.ConfigurationBeanUtil;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;
import org.spring.context.core.Registry.Metadata.MethodAnnotationMeta;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ConfigurationBeanFactoryPostProcessor implements BeanFactoryPostProcessor{
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {
        Set<BeanDefinition> cancadidates = new HashSet<>();
        Set<BeanDefinition> revolved = new HashSet<>();
        do {
            Set<BeanDefinition> needRevolve=new HashSet<>(List.of(beanFactory.getBeanDefinitions()));
            for (BeanDefinition beanDefinition : needRevolve) {
                if(!revolved.contains(beanDefinition))
                {
                    ConfigurationBeanUtil.checkFactoryBean(beanDefinition,beanFactory);
                    ConfigurationBeanUtil.checkBeanAnnotation(beanDefinition,beanFactory);
                    ComponentUtil.scan(beanFactory);
                    revolved.add(beanDefinition);
                    if (ConfigurationBeanUtil.isConfigurationBean(beanDefinition)) {
                        cancadidates.add(beanDefinition);
                    }
                }
            }
        }while (beanFactory.getBeanDefinitions().length>revolved.size());
    }
}
