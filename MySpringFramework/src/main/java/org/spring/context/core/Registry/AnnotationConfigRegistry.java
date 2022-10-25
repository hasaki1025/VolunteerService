package org.spring.context.core.Registry;

import org.spring.context.core.Registry.Definition.BeanDefinition;

public interface AnnotationConfigRegistry extends BeanRegistry{
    void register(Class<?>... componentClasses);
    void scan(String...basepackages);

    void registerAnnotationConfigProcessor(String name,Class<?> clazz);
}
