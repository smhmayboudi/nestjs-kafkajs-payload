import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
    logger: ["log", "error", "warn", "debug", "verbose"],
  });
  const documentBuilder = new DocumentBuilder()
    .addBasicAuth(
      {
        description: "It is used for login procedure.",
        scheme: "basic",
        type: "http",
      },
      "local"
    )
    .addApiKey(
      {
        description: "It is used for the rest.",
        in: "header",
        name: "Authorization",
        type: "apiKey",
      },
      "jwt"
    )
    .addApiKey(
      {
        description: "It is used for getting access token procedure.",
        in: "header",
        name: "token",
        type: "apiKey",
      },
      "token"
    )
    .setContact(
      "Hossein Mayboudi",
      "https://www.linkedin.com/in/smhmayboudi/",
      "smhmayboudi@gmail.com"
    )
    .setDescription("The fip API description.")
    .setExternalDoc("Documentation | NestJS", "https://docs.nestjs.com/")
    .setLicense("MIT", "https://en.wikipedia.org/wiki/MIT_License")
    .setTermsOfService("https://en.wikipedia.org/wiki/Terms_of_service")
    .setTitle("nestjs kafkajs payload")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup("api", app, document, {
    customSiteTitle: "nestjs kafkajs payload | Swagger UI",
    explorer: false,
  });
  await app.listenAsync("3000");
  Logger.log("Nest application is listening", "APP");
}
void bootstrap();
