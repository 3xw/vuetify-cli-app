import createCrudModule from 'vuex-crud';
import {client, parseResponse, parseError} from '@/api'

export default createCrudModule({
  resource: 'timeRecords',
  urlRoot: 'time-records',
  client,
  parseSingle: parseResponse,
  parseList: parseResponse,
  parseError: parseError
});
