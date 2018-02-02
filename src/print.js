import _ from 'lodash'
import { name, org } from './test.json'

export default function print(text) {
  let obj1 = {
    name: 'jdc-wjh'
  };
  let obj2 = {
    name: 'jdc-sky'
  };

  console.log(_.isEqual(obj1, obj2));
  console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  console.log(name, org)
}