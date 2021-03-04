FROM redis:alpine
COPY ./conf/redis.conf /usr/local/etc/redis/redis.conf
CMD ["vm.overcommit_memory = 1",">> /etc/sysctl.conf"]
CMD ["sysctl", "vm.overcommit_memory=1"]
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
