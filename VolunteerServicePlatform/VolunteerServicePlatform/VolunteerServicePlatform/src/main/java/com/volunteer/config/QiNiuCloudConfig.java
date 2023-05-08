package com.volunteer.config;

import com.qiniu.storage.Region;
import lombok.Data;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
public class QiNiuCloudConfig {
    //声明机房的区域
    private Region region= Region.huanan();
    //AK
    private String accessKey = "mLT5kj3mY2-6pBZ4NYjsdlOGnME87-wMYZAWqSut";
    //SK
    private  String secretKey = "9GYb4M2RZDLBfUxYfflny3kq0NnEy-HhWkRKOn73";
    //空间名称
    private String bucket = "capkindy";
    //请求地址
    private String url = "http://qiniuyun.nchu200462.xyz/";
}
