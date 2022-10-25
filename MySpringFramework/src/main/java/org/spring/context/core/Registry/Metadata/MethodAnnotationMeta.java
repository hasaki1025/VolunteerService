package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.ToString;
import org.spring.context.Annotation.Bean;

import java.lang.reflect.Executable;
import java.lang.reflect.Method;
import java.util.Objects;

@ToString
@Getter
public class MethodAnnotationMeta extends ExecutableAnnotationMeta{
    Class<?> returnType;
    boolean hasBeanAnnotation;


    public MethodAnnotationMeta(Executable source) {
        super(source);
        returnType=((Method) source).getReturnType();
        hasBeanAnnotation=isPresent(Bean.class);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        MethodAnnotationMeta that = (MethodAnnotationMeta) o;
        return isHasBeanAnnotation() == that.isHasBeanAnnotation() && getReturnType().equals(that.getReturnType());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReturnType(), isHasBeanAnnotation());
    }
}
