import { DataSource } from "typeorm"
import {productorEntity} from '../../db/entities/productor-entity';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ep-polished-math-a4x458b7-pooler.us-east-1.aws.neon.tech",
    port: 5432,
    username: "default",
    password: "Y2jQdEaCNvn7",
    database: "verceldb",
    synchronize: true,
    logging: true,
    entities: [productorEntity],
    ssl: true
    // migrations: ["src/db/migrations/*.ts"],
    });
