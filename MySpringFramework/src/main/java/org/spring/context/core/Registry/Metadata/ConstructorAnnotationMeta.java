package org.spring.context.core.Registry.Metadata;

import java.lang.reflect.Constructor;
import java.lang.reflect.Executable;

public class ConstructorAnnotationMeta extends ExecutableAnnotationMeta{

    boolean needAutowire;
    boolean isRequire;

    public ConstructorAnnotationMeta(Executable source) {
        super(source);
        
    }
}
