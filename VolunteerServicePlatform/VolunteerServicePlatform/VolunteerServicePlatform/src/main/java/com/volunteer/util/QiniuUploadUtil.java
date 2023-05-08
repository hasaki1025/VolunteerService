package com.volunteer.util;

import com.alibaba.fastjson.JSON;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import com.volunteer.config.QiNiuCloudConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@Slf4j
public class QiniuUploadUtil {

    @Autowired
    private QiNiuCloudConfig properties;

    /**
     * 上传
     */
    public DefaultPutRet upload(MultipartFile mf) {
        //构造一个带指定Region对象的配置类
        Configuration cfg = new Configuration(properties.getRegion());
        //创建文件上传的管理器
        UploadManager uploadManager = new UploadManager(cfg);
        //创建一个认证的对象
        Auth auth = Auth.create(properties.getAccessKey(), properties.getSecretKey());
        String upToken = auth.uploadToken(properties.getBucket());
        log.info("upToken = {}" , upToken);
        try {
            Response response = uploadManager.put(mf.getInputStream(), null, upToken, null, null);
            //解析上传成功的结果
            DefaultPutRet putRet = JSON.parseObject(response.bodyString(), DefaultPutRet.class);
            System.out.println(putRet.key);
            System.out.println(putRet.hash);
            return putRet;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    public String getUrl(){
        return properties.getUrl();
    }
}