import { CacheModuleOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

export const redisConfig = (
  configService: ConfigService,
): CacheModuleOptions<RedisClientOptions> => ({
  store: redisStore,
  url: configService.get('REDIS_URL'),
});
