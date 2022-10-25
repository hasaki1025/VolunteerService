package org.spring.context.core.Registry.BeanDefinition;

import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;

public class AnnotatedBeanDefintion implements BeanDefinition {
    ClassAnnotationMeta classAnnotationMeta;
    String name;
    Class<?> beanClass;
    boolean isSingle;

    public AnnotatedBeanDefintion(String name,Class<?> beanClass) {
        this.name=name;
        this.beanClass=beanClass;
        classAnnotationMeta = new ClassAnnotationMeta(beanClass);
        this.isSingle=classAnnotationMeta.isSingle();
    }

    public AnnotatedBeanDefintion(String name,Class<?> beanClass,boolean isSingle) {
        this(name,beanClass);
        this.isSingle=isSingle;
    }

    ClassAnnotationMeta getClassAnnotaionMeta()
    {
        return classAnnotationMeta;
    }

    @Override
    public Class<?> getBeanClass() {
        return beanClass;
    }

    @Override
    public String getBeanName() {
        return name;
    }

    @Override
    public boolean isSingle() {
        return isSingle;
    }
}
