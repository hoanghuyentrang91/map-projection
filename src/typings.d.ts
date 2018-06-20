/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'assets/libs/topojson.js';
declare module 'assets/libs/d3.v4.min.js';
declare module 'assets/libs/d3.min.js'