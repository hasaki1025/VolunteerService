import org.spring.context.Annotation.Bean;
import org.spring.context.Annotation.Configuration;

@Configuration
public class Config {

    @Bean
    Bean01 bean01()
    {
        return new Bean01();
    }
}

