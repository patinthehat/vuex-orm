//import * as Vuex from 'vuex'
import { Store, Plugin } from 'vuex'
import Container from '../container/Container'
import Database from '../database/Database'

export type Install = (
  database: Database,
  options?: Options
) => Plugin<any>

export interface Options {
  namespace?: string
}

export default (
  database: Database,
  options: Options = {}
): Plugin<any> => {
  const namespace = options.namespace || 'entities'

  return (store: Store<any>): void => {
    database.start(store, namespace)

    Container.register(store)
  }
}
