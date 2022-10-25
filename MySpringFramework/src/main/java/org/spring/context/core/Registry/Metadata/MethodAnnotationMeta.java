package org.spring.context.core.Registry.Metadata;

import org.spring.context.Annotation.Bean;

import java.lang.reflect.Executable;
import java.lang.reflect.Method;

public class MethodAnnotationMeta extends ExecutableAnnotationMeta{
    Class<?> returnType;
    boolean hasBeanAnnotation;


    public MethodAnnotationMeta(Executable source) {
        super(source);
        returnType=((Method) source).getReturnType();
        hasBeanAnnotation=isPresent(Bean.class);
    }
}
