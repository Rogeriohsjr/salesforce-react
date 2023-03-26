export {};
declare global {
  interface Window {
    fsReact: {
      addMainPage?: (pContainer: HTMLDivElement) => void;
    };
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
