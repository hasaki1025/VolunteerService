package org.spring.context.core.Registry;

import org.spring.context.Annotation.Configuration;
import org.spring.context.core.BeanFactory.ConfigurableListableBeanFactory;
import org.spring.context.core.Registry.Definition.AnnotatedBeanDefintion;
import org.spring.context.core.Registry.Definition.BeanDefinition;
import org.spring.context.core.Registry.Metadata.ClassAnnotationMeta;
import org.spring.context.core.Registry.Metadata.MethodAnnotationMeta;

import java.util.Set;

public class ConfigurationBeanUtil {
    public  static boolean isConfigurationBean(BeanDefinition beanDefinition)
    {
        if(beanDefinition instanceof AnnotatedBeanDefintion)
        {
            AnnotatedBeanDefintion defintion = (AnnotatedBeanDefintion) beanDefinition;
            ClassAnnotationMeta meta = defintion.getClassAnnotaionMeta();
            return meta.isPresent(Configuration.class);
        }
        return isConfigurationBeanNoAnnotaion(beanDefinition);
    }

   public  static  boolean isConfigurationBeanNoAnnotaion(BeanDefinition beanDefinition)
   {
       return true;
   }

   public static void checkFactoryBean(BeanDefinition beanDefinition, ConfigurableListableBeanFactory beanFactory)
   {
       AnnotatedBeanDefintion annotatedBeanDefintion=(AnnotatedBeanDefintion)beanDefinition;//TODO
       MethodAnnotationMeta methodMeta = annotatedBeanDefintion.getFactoryMethod();

       if (methodMeta!=null) {
           Class<?> returnType = methodMeta.getReturnType();
           if(!beanFactory.containsBeanDefintion(returnType))
           {
               beanFactory.registerBeanDefintion(new AnnotatedBeanDefintion(returnType.getSimpleName(),returnType));
           }
       }
   }

   public static void checkBeanAnnotation(BeanDefinition beanDefinition, ConfigurableListableBeanFactory beanFactory)
   {
       AnnotatedBeanDefintion annotatedBeanDefintion=(AnnotatedBeanDefintion)beanDefinition;
       ClassAnnotationMeta meta = annotatedBeanDefintion.getClassAnnotaionMeta();
       Set<MethodAnnotationMeta> metaSet = meta.getBeanMethods();
       for (MethodAnnotationMeta methodAnnotationMeta : metaSet) {
           Class<?> returnType = methodAnnotationMeta.getReturnType();
           if(returnType!=void.class && returnType!=null && !beanFactory.containsBeanDefintion(returnType))
           {
               beanFactory.registerBeanDefintion(new AnnotatedBeanDefintion(returnType.getSimpleName(),returnType));
           }
       }
   }



}
