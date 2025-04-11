"use client";
/*
 * Documentation:
 * Topbar with search — https://app.subframe.com/e11df886f842/library?component=Topbar+with+search_a0557db9-d89b-4725-98b9-f952f6bcb06b
 * Text Field — https://app.subframe.com/e11df886f842/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Button — https://app.subframe.com/e11df886f842/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Dropdown Menu — https://app.subframe.com/e11df886f842/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Avatar — https://app.subframe.com/e11df886f842/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { DropdownMenu } from "./DropdownMenu";
import { FeatherUser } from "@subframe/core";
import { FeatherHeart } from "@subframe/core";
import { FeatherLogOut } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  { selected = false, className, ...otherProps }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/8f75b5e7 flex cursor-pointer items-start gap-4 rounded-md px-2 py-1",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <span
        className={SubframeUtils.twClassNames(
          "text-body-bold font-body-bold text-subtext-color group-hover/8f75b5e7:text-default-font",
          { "text-default-font": selected }
        )}
      >
        Label
      </span>
    </div>
  );
});

interface TopbarWithSearchRootProps extends React.HTMLAttributes<HTMLElement> {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const TopbarWithSearchRoot = React.forwardRef<
  HTMLElement,
  TopbarWithSearchRootProps
>(function TopbarWithSearchRoot(
  { leftSlot, rightSlot, className, ...otherProps }: TopbarWithSearchRootProps,
  ref
) {
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex h-12 w-full items-center gap-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {leftSlot ? (
        <div className="flex grow shrink-0 basis-0 items-center gap-6">
          {leftSlot}
        </div>
      ) : null}
      {rightSlot ? (
        <div className="flex grow shrink-0 basis-0 items-center justify-end gap-4">
          {rightSlot}
        </div>
      ) : null}
    </nav>
  );
});

export const TopbarWithSearch = Object.assign(TopbarWithSearchRoot, {
  NavItem,
});
