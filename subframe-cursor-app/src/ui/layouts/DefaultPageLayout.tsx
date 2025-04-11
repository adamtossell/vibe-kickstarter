"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/e11df886f842/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Sidebar with collapsible sections — https://app.subframe.com/e11df886f842/library?component=Sidebar+with+collapsible+sections_78612519-5cd5-4bf1-b43b-153762fe84b6
 * Button — https://app.subframe.com/e11df886f842/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { FeatherSidebar } from "@subframe/core";
import { SidebarWithCollapsibleSections } from "../components/SidebarWithCollapsibleSections";
import { FeatherCircle } from "@subframe/core";
import { Button } from "../components/Button";
import { FeatherSparkles } from "@subframe/core";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-center mobile:flex-row mobile:flex-nowrap mobile:gap-0",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SidebarWithCollapsibleSections
        className="mobile:h-auto mobile:w-60 mobile:flex-none mobile:self-stretch"
        footer={
          <div className="flex flex-col items-start justify-center gap-2 rounded-md bg-neutral-50 px-4 py-4">
            <FeatherSparkles className="text-body font-body text-default-font" />
            <span className="text-caption-bold font-caption-bold text-default-font">
              Upgrade today to premium features &amp; more
            </span>
          </div>
        }
      >
        <div className="flex h-12 w-full flex-none items-center gap-6">
          <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
            Vibe Starter
          </span>
          <FeatherSidebar className="text-body font-body text-default-font" />
        </div>
        <SidebarWithCollapsibleSections.NavSection label="Type">
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Repo
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Tool
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            MCP
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Rules
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Text to app
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            IDE
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Component
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            UI
          </SidebarWithCollapsibleSections.NavItem>
          <Button
            className="h-8 w-full flex-none"
            disabled={false}
            variant="neutral-secondary"
            icon={null}
            iconRight={null}
            loading={false}
          >
            Clear
          </Button>
        </SidebarWithCollapsibleSections.NavSection>
        <SidebarWithCollapsibleSections.NavSection label="Framework">
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            React
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Next.js
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Vite
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Tailwind CSS
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Shadcn
          </SidebarWithCollapsibleSections.NavItem>
          <Button
            className="h-8 w-full flex-none"
            disabled={false}
            variant="neutral-secondary"
            icon={null}
            iconRight={null}
            loading={false}
          >
            Clear
          </Button>
        </SidebarWithCollapsibleSections.NavSection>
        <SidebarWithCollapsibleSections.NavSection label="Tool">
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Supabase
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Cursor
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Windsurf
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Lovable
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Bolt
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Replit
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Firebase studio
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Cloudflare
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Subframe
          </SidebarWithCollapsibleSections.NavItem>
          <Button
            className="h-8 w-full flex-none"
            disabled={false}
            variant="neutral-secondary"
            icon={null}
            iconRight={null}
            loading={false}
          >
            Clear
          </Button>
        </SidebarWithCollapsibleSections.NavSection>
        <SidebarWithCollapsibleSections.NavSection label="LLM">
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            ChatGPT
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Claude
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Grok
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Gemini
          </SidebarWithCollapsibleSections.NavItem>
          <Button
            className="h-8 w-full flex-none"
            disabled={false}
            variant="neutral-secondary"
            icon={null}
            iconRight={null}
            loading={false}
          >
            Clear
          </Button>
        </SidebarWithCollapsibleSections.NavSection>
        <SidebarWithCollapsibleSections.NavSection label="Language">
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Javascript
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Typescript
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Python
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Go
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Rust
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            Ruby
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            PHP
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            C
          </SidebarWithCollapsibleSections.NavItem>
          <SidebarWithCollapsibleSections.NavItem icon={<FeatherCircle />}>
            C++
          </SidebarWithCollapsibleSections.NavItem>
          <Button
            className="h-8 w-full flex-none"
            disabled={false}
            variant="neutral-secondary"
            icon={null}
            iconRight={null}
            loading={false}
          >
            Clear
          </Button>
        </SidebarWithCollapsibleSections.NavSection>
      </SidebarWithCollapsibleSections>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch overflow-y-auto bg-default-background px-4 py-4">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
