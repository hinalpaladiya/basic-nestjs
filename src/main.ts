import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Your React frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
 // Enable validation globally
 	app.useGlobalPipes(new ValidationPipe({
		whitelist: true, // Strip properties that do not have decorators
		forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are found
		transform: true, // Automatically transform payloads to DTO instances
	}));
  await app.listen(3001);
}
bootstrap();
