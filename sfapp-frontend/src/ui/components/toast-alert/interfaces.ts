import { EnumToastTypes } from "./constants";

export interface IToastAlertMessage {
  type: EnumToastTypes;
  messageCode: string;
  messageText: string;
}
