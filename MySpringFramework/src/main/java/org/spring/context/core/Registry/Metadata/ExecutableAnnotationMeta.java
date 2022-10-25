package org.spring.context.core.Registry.Metadata;

import lombok.Getter;
import lombok.Setter;
import org.spring.context.Annotation.Autowire;
import org.spring.context.Annotation.Bean;

import java.lang.annotation.Annotation;
import java.lang.invoke.MethodHandle;
import java.lang.reflect.Constructor;
import java.lang.reflect.Executable;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.*;

@Setter
@Getter
public abstract class ExecutableAnnotationMeta extends AnnotationMeta{

   Executable source;
   String name;
   Map<String,Class<?>> paramMap=new HashMap<>();
   Map<String,Annotation[]> paramAnnotationMap=new HashMap<>();
   Class<?> ofType;

   public ExecutableAnnotationMeta(Executable source) {
      this.source = source;
      this.name=source.getName();
      this.ofType=source.getDeclaringClass();
      annotationSet.addAll(Arrays.asList(source.getAnnotations()));
      Parameter[] parameters = source.getParameters();
      for (Parameter parameter : parameters) {
         paramMap.put(parameter.getName(),parameter.getType());
         paramAnnotationMap.put(parameter.getName(), parameter.getAnnotations());
      }
   }

}
