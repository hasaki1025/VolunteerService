package org.spring.context.core.Registry.Metadata;

import lombok.ToString;
import org.spring.context.Annotation.Autowire;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Executable;
import java.util.Objects;

@ToString
public class ConstructorAnnotationMeta extends ExecutableAnnotationMeta{

    boolean needAutowire;
    boolean isRequire;

    public ConstructorAnnotationMeta(Executable source) {
        super(source);
        needAutowire=isPresent(Autowire.class);
        Autowire autowire = getAnnotationByType(Autowire.class);
        isRequire= needAutowire && autowire.required();
    }
    @Override
    public Constructor<?> getSource()
    {
        return (Constructor<?>)source;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ConstructorAnnotationMeta that = (ConstructorAnnotationMeta) o;
        return needAutowire == that.needAutowire && isRequire == that.isRequire;
    }

    @Override
    public int hashCode() {
        return Objects.hash(needAutowire, isRequire);
    }
}
