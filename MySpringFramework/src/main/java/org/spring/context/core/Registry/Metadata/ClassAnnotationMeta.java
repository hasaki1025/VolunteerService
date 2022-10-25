package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.spring.context.Annotation.Scope;
import org.spring.context.Annotation.ScopeName;
import org.spring.context.core.Factory.FactoryBean;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
@Setter
@Getter
public class ClassAnnotationMeta extends AnnotationMeta{
    private final Map<String,MethodAnnotationMeta> methodAnnotationMetaMap=new HashMap<>();
    private final Map<String,FieldAnnotationMeta> fieldAnnotationMetaMap=new HashMap<>();
    private final Set<ConstructorAnnotationMeta> constructorSet=new HashSet<>();
    private Class<?> source;
    public Set<Class<?>> dependOn;

    public boolean isFactoryBean;
    public boolean isSingle;

    public MethodAnnotationMeta factoryBeanMethod;


    public ClassAnnotationMeta(Class<?> source) {
        this.source = source;
        isSingle=true;
        if (isPresent(Scope.class)) {
            isSingle=getAnnotationByType(Scope.class).value().equals(ScopeName.single);
        }
        if(FactoryBean.class.isAssignableFrom(source))
        {
            isFactoryBean=true;
        }
        for (Method method : source.getDeclaredMethods()) {
            MethodAnnotationMeta meta = new MethodAnnotationMeta(method);
            if (isFactoryBean && method.getName().equals("getObject"))
            {
                factoryBeanMethod=meta;
            }
            methodAnnotationMetaMap.put(method.getName(),meta);
        }
        for (Field field : source.getDeclaredFields()) {
            FieldAnnotationMeta meta = new FieldAnnotationMeta(field);
            fieldAnnotationMetaMap.put(field.getName(),meta);
            if (meta.hasAutowireAnnotation) {
                dependOn.add(meta.getType());
            }
        }

        for (Constructor<?> constructor : source.getConstructors()) {
            ConstructorAnnotationMeta meta = new ConstructorAnnotationMeta(constructor);
            constructorSet.add(meta);
            if (meta.needAutowire)
            {
                dependOn.addAll(meta.getParamMap().values());
            }
        }



    }
}
