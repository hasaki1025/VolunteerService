package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.Setter;
import org.spring.context.Annotation.Autowire;

import javax.xml.transform.Source;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import java.util.function.Predicate;

@Setter
@Getter
public class FieldAnnotationMeta extends AnnotationMeta{

    String name;
    Field source;
    Class<?> type;
    boolean hasAutowireAnnotation;
    public FieldAnnotationMeta(Field field) {
        this.name = field.getName();
        this.source = field;
        type=field.getType();
        hasAutowireAnnotation=isPresent(Autowire.class);
    }



}
