'use strict';
import Bus from '~/plugins/bus/bus';

export default function ({app, store}) {
  app.$bus = Bus;
  if (store) store.$bus = app.$bus;
}
