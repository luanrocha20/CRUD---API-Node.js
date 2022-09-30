import {Router} from 'express';
import {criarTabela, adicionarPessoa, atualizarPessoa, buscarPessoas, buscarUmaPessoa, deletarPessoa} from './Controller/Pessoa.js';

const router = Router();

router.post('/pessoa', adicionarPessoa);
router.get('/pessoa', buscarUmaPessoa);
router.get('/pessoas', buscarPessoas);
router.put('/pessoa', atualizarPessoa);
router.delete('/pessoa', deletarPessoa);

export default router;