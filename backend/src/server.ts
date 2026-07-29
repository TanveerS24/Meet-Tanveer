import app from './app';
import { envConfig } from './config/env.config';
import { connectDatabase } from './repositories/prisma.client';
import { logger } from './utils/logger';

const startServer = async () => {
  await connectDatabase();

  const server = app.listen(envConfig.port, () => {
    logger.info(`Enterprise Portfolio Backend running in [${envConfig.nodeEnv}] mode on port ${envConfig.port}`);
  });

  const handleShutdown = (signal: string) => {
    logger.info(`Received ${signal}. Gracefully shutting down HTTP server...`);
    server.close(() => {
      logger.info('HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer();
