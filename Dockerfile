FROM php:7.4-apache

# 安装PHP扩展和其他依赖
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo pdo_mysql zip

# 启用Apache模块
RUN a2enmod rewrite

# 复制WordPress文件
COPY . /var/www/html/

# 设置正确的权限
RUN chown -R www-data:www-data /var/www/html

# 暴露80端口
EXPOSE 80

# 启动Apache
CMD ["apache2-foreground"]
