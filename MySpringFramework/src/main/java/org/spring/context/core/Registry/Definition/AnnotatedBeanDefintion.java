package org.spring.context.core.Registry.Definition;

import lombok.ToString;
import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;
import org.spring.context.core.Registry.Metadata.MethodAnnotationMeta;

import java.util.Set;

@ToString
public class AnnotatedBeanDefintion implements BeanDefinition {
    ClassAnnotationMeta classAnnotationMeta;
    MethodAnnotationMeta factoryMethod;
    String name;

    public AnnotatedBeanDefintion() {
    }

    Class<?> beanClass;
    boolean isSingle;
    Set<Class<?>> dependOn;

    public AnnotatedBeanDefintion(String name,Class<?> beanClass) {
        this.name=name;
        this.beanClass=beanClass;
        classAnnotationMeta = new ClassAnnotationMeta(beanClass);
        this.isSingle=classAnnotationMeta.isSingle();
        this.factoryMethod=classAnnotationMeta.getFactoryBeanMethod();
        this.dependOn=classAnnotationMeta.dependOn;
    }

    public AnnotatedBeanDefintion(String name,Class<?> beanClass,boolean isSingle) {
        this(name,beanClass);
        this.isSingle=isSingle;
    }

    public ClassAnnotationMeta getClassAnnotaionMeta()
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

    public MethodAnnotationMeta getFactoryMethod() {
        return factoryMethod;
    }
}
