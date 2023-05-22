//import do servidor
import {server} from './server/server';

//escuta a instancia que foi criada do servidor
server.listen(3333, () => console.log('App rodando!'));
