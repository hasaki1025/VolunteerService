package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.Setter;

import java.lang.annotation.Annotation;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
@Setter
@Getter
public class ClassAnnotationMeta extends AnnotationMeta{
    private final Map<String,MethodAnnotationMeta> methodAnnotationMetaMap=new HashMap<>();
    private final Map<String,FieldAnnotationMeta> fieldAnnotationMetaMap=new HashMap<>();
    private Class<?> source;

}
