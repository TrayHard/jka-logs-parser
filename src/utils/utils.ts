import util from 'util';

export const deepLog = (obj: any) => console.log(util.inspect(obj, false, null, true))
