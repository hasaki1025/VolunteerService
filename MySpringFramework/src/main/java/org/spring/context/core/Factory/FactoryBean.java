package org.spring.context.core.Factory;

public interface FactoryBean<T> {
    T getObject();
    Class<?> getObjectType();
}

