package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.Setter;

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

    private final String name;
    private final Class<?> source;

    public FieldAnnotationMeta(String name, Class<?> source) {
        this.name = name;
        this.source = source;
    }


}
