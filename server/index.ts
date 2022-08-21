import * as http from 'http';

import App from './app';
import { Logger } from './logger/logger';

const PORT = parseInt(process.env['PORT'] as string, 10) || 8000;

App.set('port', PORT);
const server = http.createServer(App);
server.listen(PORT);

const logger = new Logger();

server.on('listening', function (): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  logger.info(`Listening on port ${bind}`);
});

module.exports = App;
