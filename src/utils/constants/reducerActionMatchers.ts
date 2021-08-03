import { AnyAction } from "@reduxjs/toolkit";

export const hasPrefix = (action: AnyAction, prefix: string) =>
  action.type.startsWith(prefix);
export const isPending = (action: AnyAction) => action.type.endsWith("/pending");
export const isFulfilled = (action: AnyAction) => action.type.endsWith("/fulfilled");
export const isRejected = (action: AnyAction) => action.type.endsWith("/rejected");