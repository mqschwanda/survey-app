/**
 * We initialize the reduce function with the provided object and then check if
 * the object is defined and if yes, verify if the key exists. Depending on the
 * result of (xs && xs[x]) we either return the value or null and so on.
 * @param  {[type]} keys [description]
 * @return {[type]}      [description]
 */
export const get = keys => object =>
  keys.reduce((value, key) =>
    (value && value[key]) ? value[key] : null, object)

export default get;
