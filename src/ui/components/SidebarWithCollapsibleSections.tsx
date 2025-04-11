"use client";
/*
 * Documentation:
 * Sidebar with collapsible sections — https://app.subframe.com/e11df886f842/library?component=Sidebar+with+collapsible+sections_78612519-5cd5-4bf1-b43b-153762fe84b6
 * Button — https://app.subframe.com/e11df886f842/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";
import { FeatherCircleDashed } from "@subframe/core";
import { Accordion } from "./Accordion";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  {
    selected = false,
    children,
    icon = <FeatherCircleDashed />,
    rightSlot,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/5a1d80c4 flex h-8 w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-100 active:bg-neutral-200",
        {
          "border border-solid border-brand-primary bg-brand-50 hover:bg-brand-100 hover:shadow-none active:bg-brand-200":
            selected,
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-subtext-color",
            { "text-default-font": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-body font-body text-subtext-color",
            { "text-body-bold font-body-bold text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? <div className="flex items-center">{rightSlot}</div> : null}
    </div>
  );
});

interface NavSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const NavSection = React.forwardRef<HTMLElement, NavSectionProps>(
  function NavSection(
    { children, label, icon = null, className, ...otherProps }: NavSectionProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/eed77531 flex w-full cursor-pointer flex-col items-start gap-6",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <Accordion
          trigger={
            <div className="flex w-full items-center gap-2 rounded-md px-3 py-2 group-hover/eed77531:bg-neutral-100">
              {icon ? (
                <SubframeCore.IconWrapper className="text-body font-body text-default-font">
                  {icon}
                </SubframeCore.IconWrapper>
              ) : null}
              {label ? (
                <span className="line-clamp-1 grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                  {label}
                </span>
              ) : null}
              <Accordion.Chevron />
            </div>
          }
          defaultOpen={true}
        >
          {children ? (
            <div className="flex w-full flex-col items-start">{children}</div>
          ) : null}
        </Accordion>
      </div>
    );
  }
);

interface SidebarWithCollapsibleSectionsRootProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const SidebarWithCollapsibleSectionsRoot = React.forwardRef<
  HTMLElement,
  SidebarWithCollapsibleSectionsRootProps
>(function SidebarWithCollapsibleSectionsRoot(
  {
    children,
    footer,
    className,
    ...otherProps
  }: SidebarWithCollapsibleSectionsRootProps,
  ref
) {
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex h-full w-60 flex-col items-start bg-default-background",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-4 py-4 overflow-auto">
          {children}
        </div>
      ) : null}
      {footer ? (
        <div className="flex w-full flex-col items-start justify-end gap-2 px-4 py-4">
          {footer}
        </div>
      ) : null}
    </nav>
  );
});

export const SidebarWithCollapsibleSections = Object.assign(
  SidebarWithCollapsibleSectionsRoot,
  {
    NavItem,
    NavSection,
  }
);
