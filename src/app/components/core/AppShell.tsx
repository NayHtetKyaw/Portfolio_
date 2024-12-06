"use client";

import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import ApplicationHeaders from "./ApplicationHeaders";

export default function ApplicationShell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      padding="md"
    >
      <ApplicationHeaders />
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

