/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { createContext } from "react";

const LocaleContext = createContext();

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
export default LocaleContext;
