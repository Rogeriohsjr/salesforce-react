export {};
declare global {
  interface Window {
    Visualforce: {
      remoting: {
        Manager: {
          invokeAction: any;
        };
      };
    };
    sfGlobalRemote: any;
  }
}