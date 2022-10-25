package org.spring.context.core.Registry.Metadata;

import org.spring.context.Annotation.Autowire;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Executable;

public class ConstructorAnnotationMeta extends ExecutableAnnotationMeta{

    boolean needAutowire;
    boolean isRequire;

    public ConstructorAnnotationMeta(Executable source) {
        super(source);
        needAutowire=isPresent(Autowire.class);
        Autowire autowire = getAnnotationByType(Autowire.class);
        isRequire= needAutowire && autowire.required();
    }

    public Constructor<?> getSource()
    {
        return (Constructor<?>)source;
    }

}
