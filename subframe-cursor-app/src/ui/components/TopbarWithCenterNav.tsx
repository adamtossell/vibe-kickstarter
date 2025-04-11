"use client";
/*
 * Documentation:
 * Topbar with center nav — https://app.subframe.com/e11df886f842/library?component=Topbar+with+center+nav_d49efd88-db1c-4c7c-b784-3c84ddc2d7b9
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  {
    selected = false,
    icon = null,
    children,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/2609a7cf flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-caption font-caption text-subtext-color group-hover/2609a7cf:text-default-font",
            {
              "text-default-font group-hover/2609a7cf:text-default-font":
                selected,
            }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-caption-bold font-caption-bold text-subtext-color group-hover/2609a7cf:text-default-font",
            { "text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface TopbarWithCenterNavRootProps
  extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const TopbarWithCenterNavRoot = React.forwardRef<
  HTMLElement,
  TopbarWithCenterNavRootProps
>(function TopbarWithCenterNavRoot(
  { className, ...otherProps }: TopbarWithCenterNavRootProps,
  ref
) {
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex w-full items-center justify-center gap-4 bg-default-background px-4 py-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <img
        className="h-5 flex-none object-cover"
        src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
      />
    </nav>
  );
});

export const TopbarWithCenterNav = Object.assign(TopbarWithCenterNavRoot, {
  NavItem,
});
