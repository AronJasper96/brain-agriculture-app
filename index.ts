import 'dotenv/config';
import expressServer from './src/express-server';
//import { AppDataSource } from './src/utils/db/connection';
/**
 * Initializes the application by starting the Express server and populating the film table.
 *
 * @return {Promise<void>} A promise that resolves when the initialization is complete.
 */
const init = async () =>{
  try {
    const server = await expressServer();
    const port = process.env.PORT_API || 3000
    server.listen(port, () =>{
      console.log(`API run on http://localhost:${port}`);
    })
  } catch (error) {
    console.error(error);
  }

  // try {
  //   await AppDataSource.initialize();
  //   console.log("DataBase Connection Success");
  // } catch (error) {
  //   console.log("DataBase Connection Error: ", error);
  // }
};

init();