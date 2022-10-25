package org.spring.context.core.Registry;

public interface AnnotationConfigRegistry extends BeanRegistry{
    void register(Class<?>... componentClasses);
    void scan(String...basepackages);
}
