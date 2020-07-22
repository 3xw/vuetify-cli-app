import createCrudModule from 'vuex-crud';
import {client, parseResponse} from '@/api'

export default createCrudModule({
  resource: 'exemples',
  client,
  parseSingle: parseResponse,
  parseList: parseResponse
});
