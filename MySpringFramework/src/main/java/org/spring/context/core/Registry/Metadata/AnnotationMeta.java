package org.spring.context.core.Registry.Metadata;

import java.lang.annotation.Annotation;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public  class AnnotationMeta {
    final Set<Annotation> annotationSet=new HashSet<>();

    public Set<Annotation> getAnnotationSet() {
        return annotationSet;
    }

    public<T> T getAnnotationByType(Class<T> type)
    {
        for (Annotation annotation : annotationSet) {
            if (type!=null && type.isAssignableFrom(annotation.getClass()))
            {
                return (T)annotation;
            }
        }
        return null;
    }

    public boolean isPresent(Class<? extends  Annotation> type)
    {
        return getAnnotationByType(type)!=null;
    }


}
