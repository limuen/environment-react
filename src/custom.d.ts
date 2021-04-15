// declare module '*.css' {
//   const css: { [key: string]: string };
//   export default css;
// }
declare module '*.less';

declare module '*.module.less' {
  const less: { [key: string]: string };
  export default less;
}
