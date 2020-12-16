# 备份Docker容器内的MongoDB数据
``` sh
docker exec -d mongo mongodump --username admin --password 123456 --authenticationDatabase admin --db maker --out /backup
```